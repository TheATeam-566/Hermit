import React, { Component } from 'react';
import { Button, ListGroup, Image, Container, Col, Row } from 'react-bootstrap';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';
import MapContainer from '../Map/MapContainer';
import DistanceMap from '../Map/DistanceMap';

class OrderConfirmation extends Component {
  state = {
    address: this.props.address,
    cart: this.props.cart,
    subTotal: this.props.subTotal,
    distance: null,
  };

  renderCartReview = () => {
    return (
      <>
        {this.state.cart.map((food) => (
          <ListGroup>
            <ListGroup.Item key={food}>
              <Container fluid>
                <Row>
                  <Col>
                    <Image
                      src={`${food.image}`}
                      alt={`${food.caption}`}
                      width="150"
                      height="150"
                      rounded
                    />
                  </Col>
                  <Col xs={6}>
                    <br />
                    <br />
                    {String(food.caption)}
                    <br />
                    {'A delicious item 🦆'}
                    <br />${String(food.price)}
                    <br />
                  </Col>
                  <Col>
                    <br />
                    <br />
                    <Button variant="danger" onClick={(e) => this.onDecreaseQuantity(e, food)}>
                      <DashCircleFill />
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="success" onClick={(e) => this.onIncreaseQuantity(e, food)}>
                      <PlusCircleFill />
                    </Button>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{food.quantity}</h2>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <hr />
          </ListGroup>
        ))}
      </>
    );
  };

  renderSubTotal = () => {
    return (
      <Row>
        <Col>Sub Total: </Col>
        {/*THIS NEEDS TO BE CHANGED TO TAKE IN DYNAMIC VALUES */}
        <Col md={3}> {this.state.subTotal}</Col>
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
          <MapContainer address={this.state.address} />
        </Row>
        <Row>
          {/* <DistanceMap
            address={this.state.address}
            origin="3401+Dufferin+Street+North+York"
            travelMode="DRIVING"
          ></DistanceMap> */}
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
        <hr></hr>
        {this.renderSubTotal()}
        {this.insertBreak()}

        {this.renderBottomView()}
      </Container>
    );
  }
}

export default OrderConfirmation;
