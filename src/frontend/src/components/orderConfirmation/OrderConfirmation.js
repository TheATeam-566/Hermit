import React, { Component } from 'react';
import { Button, ListGroup, Image, Container, Col, Row, Table } from 'react-bootstrap';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';
import MapContainer from '../Map/MapContainer';
import Stripe from '../Stripe/Stripe';
import './OrderConfirmation.css';

class OrderConfirmation extends Component {
  state = {
    userInfo: this.props.userInfo,
    isLoggedIn: this.props.isLoggedIn,
    address: this.props.address,
    cart: this.props.cart,
    subTotal: this.props.subTotal,
    distance: 0,
    serviceFee: 2.99,
    distanceKm: 0,
    distanceOver: 0,
    deliveryFee: 2.99,
    HST: 0.13,
    taxPrice: 0,
    totalPrice: 0.0,
    token: {},
    totalToPersist: {
      // sending back to main which sends to firestore after an order is completed
      // this can be refactored later to replace total (same thing can also be done in main)
      subtotal: 0.0,
      HST: 0.0,
      serviceFee: 0.0,
      deliveryFee: 0.0,
      grandTotal: 0.0,
    },
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
                    <h5>{String(food.caption)}</h5>
                    <br />
                    {food.description}
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
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;{food.quantity}</h2>
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

  onDecreaseQuantity = async (e, food) => {
    e.preventDefault();
    // Find element in the cart array by caption and if found and quantity is not equal to 0, decrease the quantity of the element in the array by 1
    this.state.cart.forEach(async (foodInCart) => {
      if (foodInCart.caption === food.caption && foodInCart.quantity > 0) {
        this.setState({ foodInCart: (foodInCart.quantity -= 1) });
        await this.props.updateCartQuantities(this.state.cart);
        let newTotal = 0;
        this.state.cart.forEach((item) => {
          newTotal += item.price * item.quantity;
          return (newTotal = Number(newTotal.toFixed(2))); // Rounding the total to nearest cent
        });

        await this.setState({ subTotal: newTotal });
        this.calculateTax();
        this.calculateTotal();
      }

      if (foodInCart.quantity === 0) {
        this.setState(await { cart: this.state.cart.filter((item) => item.quantity !== 0) });
        await this.props.updateCartQuantities(this.state.cart);
      }
    });
  };

  onIncreaseQuantity = async (e, food) => {
    e.preventDefault();
    // Find the element in the cart array by caption and if found and quantity is not equal to 0, increase the quantity of the element in the array by 1
    this.state.cart.forEach(async (foodInCart) => {
      if (foodInCart.caption === food.caption) {
        this.setState({ foodInCart: (foodInCart.quantity += 1) });
        await this.props.updateCartQuantities(this.state.cart);
        let newTotal = 0;
        this.state.cart.forEach((item) => {
          newTotal += item.price * item.quantity;
          return (newTotal = Number(newTotal.toFixed(2))); // Rounding the total to nearest cent
        });

        await this.setState({ subTotal: newTotal });
        this.calculateTax();
        this.calculateTotal();
      }
    });
  };

  setDistance = async (newDistance) => {
    await this.setState(
      {
        distance: newDistance,
      },
      () => {
        if (this.state.distance !== 0) {
          this.setDistanceKm();
        }
      }
    );
  };

  setDeliveryInfo = (newDelivery) => {
    this.props.getDelivery(newDelivery);
  };

  setDistanceKm = async () => {
    await this.setState(
      {
        distanceKm: this.state.distance / 1000,
      },
      () => {
        if (this.state.distanceKm !== 0) {
          this.calculateDeliverFee();
        }
      }
    );
  };

  calculateDeliverFee = async () => {
    if (this.state.distanceKm > 5) {
      await this.setState({
        distanceOver: this.state.distanceKm - 5,
      });
      this.setState({
        deliveryFee: 2.99 + this.state.distanceOver * 0.25,
      });
    }
    this.calculateTax();
  };

  calculateTax = () => {
    this.setState({
      taxPrice:
        (this.state.deliveryFee + this.state.subTotal + this.state.serviceFee) * this.state.HST,
    });

    this.calculateTotal();
    this.setTotaltoPersist();
    this.props.receiveOCTotal(this.state.totalToPersist);
  };

  calculateTotal = async () => {
    await this.setState({
      totalPrice:
        this.state.subTotal + this.state.serviceFee + this.state.deliveryFee + this.state.taxPrice,
    });
  };

  setTotaltoPersist = async () => {
    await this.setState({
      totalToPersist: {
        subtotal: this.state.subTotal,
        HST: Number(this.state.taxPrice.toFixed(2)),
        serviceFee: this.state.serviceFee,
        deliveryFee: Number(this.state.deliveryFee.toFixed(2)),
        grandTotal: Number(this.state.totalPrice.toFixed(2)),
      },
    });
  };

  receiveTokenFromStripe = (token) => {
    this.setState({ token: token });
    this.props.receiveTokenFromOrderConfirmation(this.state.token);
  };

  renderCheckoutButton = () => {
    if (this.state.isLoggedIn) {
      if (this.state.cart.length !== 0) {
        return (
          <Stripe
            receiveTokenFromStripe={this.receiveTokenFromStripe}
            amount={this.state.totalPrice}
            name={this.state.userInfo.fName + ' ' + this.state.userInfo.lName}
            currency="CAD"
            email={this.state.userInfo.email}
            shippingAddress={this.state.userInfo.address + ' ' + this.state.userInfo.city}
            billingAddress={this.state.userInfo.address + ' ' + this.state.userInfo.city}
            label="Checkout"
          />
        );
      }
    }
  };

  renderPriceBreakdown = () => {
    return (
      <>
        <Row>
          <Table striped borderless hover variant="light" className="table-fill">
            <tbody className="table-hover">
              <tr>
                <td className="text-left">Sub Total:</td>
                <td className="text-left">${this.state.subTotal}</td>
              </tr>
              <tr>
                <td className="text-left">Service Fee: </td>
                <td className="text-left">${this.state.serviceFee}</td>
              </tr>
              <tr>
                <td className="text-left">Delivery Fee: </td>
                <td className="text-left">${this.state.deliveryFee.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="text-left">HST: </td>
                <td className="text-left">${this.state.taxPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="text-left" style={{ fontWeight: 800 }}>
                  Total:
                </td>
                <td className="text-left" style={{ fontWeight: 800 }}>
                  ${this.state.totalPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col>{this.renderCheckoutButton()}</Col>
          <Col></Col>
        </Row>
      </>
    );
  };

  renderMapView = () => {
    return (
      this.setDistanceKm && (
        <Row>
          <MapContainer
            address={this.state.address}
            getDistance={this.setDistance.bind(this)}
            getDelivery={this.setDeliveryInfo.bind(this)}
          />
        </Row>
      )
    );
  };

  renderBottomView = () => {
    return (
      <Row>
        <Col>{this.renderMapView()}</Col>
        <Col>{this.renderPriceBreakdown()}</Col>
      </Row>
    );
  };

  render() {
    return (
      <Container fluid="md">
        {this.renderCartReview()}
        <hr></hr>
        <br />
        {this.renderBottomView()}
      </Container>
    );
  }
}

export default OrderConfirmation;
