import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Categories from './Categories';
import Items from './Items';

class Mainpage extends Component {
  state = { category: '' };

  onCategoryClick = (category) => {
    this.setState({ category: category });
  };

  render() {
    return (
      <div className="mainpage">
        <Container fluid>
          <Row>
            <Col xs={3}>
              <Categories onCategoryClick={this.onCategoryClick} />
            </Col>
            <Col xs={9}>
              <Items category={this.state.category} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mainpage;
