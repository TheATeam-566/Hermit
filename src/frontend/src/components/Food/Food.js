import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FoodCategories from './FoodCategories';
import FoodCard from './FoodCard';

class Food extends Component {
  state = { category: '', total: 0.0 };

  onCategoryClick = (category) => {
    this.setState({ category: category });
  };

  onAddToCart = async (total) => {
    this.setState({ total: total });
    await this.props.receiveTotal(this.state.total);
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
