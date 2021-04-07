import React from 'react';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Basket } from 'react-bootstrap-icons';
import CartModal from './CartModal';
import './Header.css';

class Header extends React.Component {
  state = {
    userInfo: {},
    isLoggedIn: false,
    total: '0.00',
    cart: [],
  };

  componentWillReceiveProps = async (nextProps) => {
    this.setState({
      total: nextProps.total,
      cart: nextProps.cart,
      userInfo: nextProps.userInfo,
      isLoggedIn: nextProps.isLoggedIn,
    });
  };

  // This method is called by CartModal.js whenever quantity is updated within the Modal.
  // The purpose of this method is to pass back the updated cart array from CartModal.js to Header.js.
  updateCartQuantities = async (updatedCart) => {
    this.setState({ cart: updatedCart });
    // Calculating the total of all the items within the updated cart.
    let newTotal = 0;
    this.state.cart.forEach((item) => {
      newTotal += item.price * item.quantity;
      return (newTotal = Number(newTotal.toFixed(2))); // Rounding the total to nearest cent
    });

    await this.setState({ total: newTotal });

    // This method is sent as a prop to this component (Header.js) by Main.js.
    // The purpose of this method is to pass back the updated cart array back to Main.js
    await this.props.receiveCartFromModal(this.state.cart, this.state.total);
  };

  // Render buttons according to loggedin state
  renderButtons = () => {
    if (!this.state.isLoggedIn) {
      return (
        <>
          <Col className="user-action-button">
            <br />
            <Button variant="primary" href="/auth/google/" className="btn-round animation-on-hover">
              Sign In
            </Button>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col className="user-action-button">
            <Button
              variant="outline-danger"
              href="/auth/logout/"
              className="btn-round animation-on-hover"
            >
              Sign Out
            </Button>
          </Col>
        </>
      );
    }
  };

  // Render user avatar once logged in
  renderAvatar = () => {
    return (
      <>
        <Col>
          <Link to="/user">
            <Image
              className="profile-header-img"
              src={`${this.state.userInfo.image}`}
              alt="User Avatar"
              roundedCircle
            />
          </Link>
        </Col>
      </>
    );
  };

  // Render user name
  renderName = () => {
    // if we're still waiting on async to return, do nothing
    if (this.state.userInfo.fName || this.state.userInfo.lName) {
      return (
        <>
          <Col>
            <h3 className="user-name-text">
              {this.state.userInfo.fName + ' ' + this.state.userInfo.lName}
            </h3>
          </Col>
        </>
      );
    }
  };

  // Render user address
  renderAddress = () => {
    if (this.state.userInfo.address) {
      return (
        <>
          <Col>
            <h6 className="user-address-text">{this.state.userInfo.address}</h6>
          </Col>
        </>
      );
    } else if (!this.state.userInfo.address && this.state.isLoggedIn) {
      return (
        <>
          <Col>
            <h6>
              <Link to="/user">No address.</Link>
            </h6>
          </Col>
        </>
      );
    }
  };

  // Render the entire user profile on the header
  renderCurrentUser = () => {
    return (
      <>
        <Container fluid>
          <Row md={24}>
            <Col md={{ span: 4, offset: 1 }}>
              <br />
              <Link to="/">
                <Image src={'/hermit_white-inverted.png'} height="150" width="150" rounded />
              </Link>
            </Col>
            <Col md={{ offset: 0 }}>
              <br />
              <Image src={'/cheese-factory-logo.png'} height="100%" width="50%" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <br />
                  {this.renderAvatar()}
                  {this.renderName()}
                  {this.renderAddress()}
                </Col>
                <Col>
                  <br />
                  <br />
                  {this.renderButtons()}
                  <br />
                  {this.renderBasketEmoji()}
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="header-divider" />
        </Container>
      </>
    );
  };

  // Modal onClick Handler to show/hide modal
  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  // Render basket emoji
  renderBasketEmoji = () => {
    return (
      <Col>
        <div
          onClick={(e) => {
            this.showModal(e);
          }}
        >
          <Col className="cart-button">
            <h6 className="user-name-text">Total: </h6>
          </Col>
          <Col className="cart-button">
            <Link to="#">
              <Basket size={40} /> ${this.state.total}
            </Link>
          </Col>
        </div>
      </Col>
    );
  };

  render() {
    return (
      <>
        {this.renderCurrentUser()}
        <CartModal
          onClose={this.showModal}
          show={this.state.show}
          children={this.state.cart}
          updateCartQuantities={this.updateCartQuantities}
        />
      </>
    );
  }
}

export default Header;
