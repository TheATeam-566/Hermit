import React, { Component } from 'react';
import { Button, Card, CardDeck, CardColumns, Accordion } from 'react-bootstrap';
import _ from 'lodash';
import './FoodCard.css';

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

  // FoodCard/Item add to cart onClick handler for adding items to cart
  clickHandler = async (e, item) => {
    e.preventDefault();

    const objectToPush = {
      caption: item.caption,
      description: item.description,
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
          <Card.Text className="h4">${item.price}</Card.Text>
          <Button
            className="btn-round animation-on-hover"
            variant="primary"
            onClick={(e) => this.clickHandler(e, item)}
          >
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

  // Logic to render the actual items onto cards
  renderCategories = () => {
    return (
      <>
        <CardDeck>
          <CardColumns>
            {Object.values(this.state.items).map((item) => (
              <>
                <Card className="text-center" style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="productTitle">{item.caption}</Card.Title>
                    <Accordion className="accordion-style" defaultActiveKey="1">
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Button className="btn-round animation-on-hover" variant="default">
                          Details
                        </Button>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Text className="accordion-style-text">{item.description}</Card.Text>
                      </Accordion.Collapse>
                    </Accordion>
                    {this.renderButtons(item)}
                  </Card.Body>
                </Card>
              </>
            ))}
          </CardColumns>
        </CardDeck>
      </>
    );
  };

  render() {
    return <>{this.renderCategories()}</>;
  }
}

export default FoodCard;
