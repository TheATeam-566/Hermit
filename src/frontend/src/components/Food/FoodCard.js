import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import _ from 'lodash';

class FoodCard extends Component {
  state = { items: [], category: '', cart: [] };

  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ cart: nextProps.updatedCart });
    await this.setState({ category: nextProps.category });
    await this.fetchMenuItems();
  };

  fetchMenuItems = async () => {
    const response = await fetch(`api/menu/${this.state.category}/items`);
    const items = await response.json();
    this.setState({ items: items });
  };

  clickHandler = async (e, item) => {
    e.preventDefault();

    const objectToPush = {
      caption: item.caption,
      image: item.image,
      price: item.price,
      quantity: 0, // This has to stay at 0 due to post increment below
    };

    // Pushing the item the user is adding to cart array
    await this.state.cart.push(objectToPush);
    // Setting the state of cart to ONLY unique items
    await this.setState({ cart: _.uniqBy(this.state.cart, 'caption') });

    // Incrementing the quantity in the cart when a duplicated item is added to cart
    await this.state.cart.forEach((food) => {
      if (food.caption === objectToPush.caption) {
        food.quantity++;
      }
    });

    await this.props.onAddToCart(this.state.cart);
  };

  // Logic to render price a button if we have no price
  renderButtons = (item) => {
    if (item.price) {
      return (
        <>
          <Card.Text>${item.price}</Card.Text>
          <Button variant="primary" onClick={(e) => this.clickHandler(e, item)}>
            Add to Cart
          </Button>
        </>
      );
    } else if (!item.price) {
      return (
        <>
          <Card.Text>No Price</Card.Text>
          <Button variant="secondary" disabled>
            Add to Cart
          </Button>
        </>
      );
    }
  };

  renderCategories = () => {
    return (
      <>
        {Object.values(this.state.items).map((item) => (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.caption}</Card.Title>
                <Card.Text>A delicious item 🦆</Card.Text>
                {this.renderButtons(item)}
              </Card.Body>
            </Card>
          </>
        ))}
      </>
    );
  };

  render() {
    return <>{this.renderCategories()}</>;
  }
}

export default FoodCard;
