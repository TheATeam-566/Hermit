import React, { Component } from 'react';
import { Button, Card, CardDeck, Container, CardColumns } from 'react-bootstrap';
import _ from 'lodash';

class SearchResults extends Component {
  state = { categories: [], items: [], cart: [] };

  fetchMenuItems = async () => {
    const response = await fetch('api/menu/categories/allitems');
    const items = await response.json();
    this.setState({ items: items });
  };

  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ cart: nextProps.updatedCart });
    this.fetchMenuItems();
  };

  async componentDidMount() {
    await this.fetchMenuItems();
    this.props.receiveItemsFromSearchResults(this.state.items);
  }

  clickHandler = async (e, item) => {
    e.preventDefault();

    const objectToPush = {
      caption: item.caption,
      image: item.image,
      price: item.price,
      description: item.description,
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
    }
  };

  renderItems = () => {
    return (
      <>
        <Container>
          <CardDeck>
            <CardColumns>
              {Object.values(this.props.filteredItems).map((item) => (
                <>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.caption}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      {this.renderButtons(item)}
                    </Card.Body>
                  </Card>
                </>
              ))}
            </CardColumns>
          </CardDeck>
        </Container>
      </>
    );
  };

  render() {
    return <>{this.renderItems()}</>;
  }
}

export default SearchResults;
