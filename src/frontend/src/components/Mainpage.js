import React, { Component } from 'react';
import Categories from './Categories';
import { Container, Col, Row } from 'react-bootstrap';

class Mainpage extends Component {
  // https://www.golangprograms.com/how-to-pass-data-from-child-component-to-its-parent-in-reactjs.html
  // See the link above for descriptions on the multiple ways to pass data from child to parent components.
  // Note, we will need to pass data from Categories back to Mainpage in order to then render the Items component.

  render() {
    return (
      <div className="mainpage">
        <Container fluid>
          <Row>
            <Col xs={3}>
              <Categories />
            </Col>
            <Col xs={9}>Items Go Here.</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mainpage;
