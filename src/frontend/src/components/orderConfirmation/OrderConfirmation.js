import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MapContainer from '../Map/MapContainer';
import { length, time, userAddress } from '../Map/Map';

class OrderConfirmation extends Component {
  renderCartReview = () => {
    return (
      <Row>
        {/*THIS NEEDS TO BE CHANGED TO TAKE IN DYNAMIC VALUES */}
        <Col>
          <img
            src="https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Social_TossedGreenSalad.jpg"
            alt="salad"
            width="150"
            height="150"
          />
        </Col>
        <Col>Salad</Col>
        <Col>X 1</Col>
        <Col>$ 20</Col>
      </Row>
    );
  };

  renderSubTotal = () => {
    return (
      <Row>
        <Col>Sub Total: </Col>
        {/*THIS NEEDS TO BE CHANGED TO TAKE IN DYNAMIC VALUES */}
        <Col md={3}> $40</Col>
      </Row>
    );
  };

  renderPriceBreakdown = () => {
    return (
      <div>
        <Row>
          <Col>Service Fee: </Col>
          <Col>$2.99</Col>
        </Row>
        {this.insertBreak()}
        <Row>
          <Col>Delivery Fee: </Col>
          <Col>$4.99</Col>
        </Row>
        {this.insertBreak()}
        <Row>
          <Col>HST: </Col>
          <Col>$14.69</Col>
        </Row>
        {this.insertBreak()}
        <Row>
          <Col>Total: </Col>
          <Col>$69.40</Col>
        </Row>
      </div>
    );
  };

  renderMapView = () => {
    return (
      <div>
        <Row>
          <MapContainer />
        </Row>
        <Row>
          <Col>{time}</Col>
        </Row>
        <Row>
          <Col>You are located {length} away</Col>
        </Row>
      </div>
    );
  };

  renderBottomView = () => {
    return (
      <div>
        <Row>
          <Col>{this.renderMapView()}</Col>
          <Col>{this.renderPriceBreakdown()}</Col>
        </Row>
      </div>
    );
  };

  insertBreak = () => {
    return (
      <Row>
        <br></br>
      </Row>
    );
  };

  render() {
    /*THIS NEEDS TO BE CHANGED TO TAKE IN DYNAMIC NUMBER OF FOOD ITEMS IN CART */
    return (
      // TEMP
      <Container fluid="md">
        {this.renderCartReview()}
        {this.insertBreak()}
        {this.renderCartReview()}
        {this.insertBreak()}
        <hr></hr>
        {this.renderSubTotal()}
        {this.insertBreak()}

        {this.renderBottomView()}
      </Container>
    );
  }
}

export default OrderConfirmation;
