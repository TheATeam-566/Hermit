import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FoodCategories from './FoodCategories';
import FoodCard from './FoodCard';

class Food extends Component {
  state = { category: '', cart: [] };

  onCategoryClick = (category) => {
    this.setState({ category: category });
  };

  onAddToCart = async (cart) => {
    this.setState({ cart: cart });
    await this.props.receiveCart(this.state.cart);
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={3}>
              <FoodCategories onCategoryClick={this.onCategoryClick} />
            </Col>
            <Col xs={9}>
              <FoodCard category={this.state.category} onAddToCart={this.onAddToCart} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Food;
