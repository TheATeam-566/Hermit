import React from 'react';
import { Button, Container, Col, Row, Image, Form } from 'react-bootstrap';
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

  renderButtons = () => {
    if (!this.state.isLoggedIn) {
      return (
        <>
          <br />
          <Button variant="primary" href="/auth/google/">
            Sign In
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button variant="outline-danger" href="/auth/logout/">
            Sign Out
          </Button>
        </>
      );
    }
  };

  renderAvatar = () => {
    return (
      <>
        <Link to="/user">
          <Image
            className="profile-header-img"
            src={`${this.state.userInfo.image}`}
            alt="User Avatar"
            roundedCircle
          />
        </Link>
      </>
    );
  };

  renderName = () => {
    // if we're still waiting on async to return, do nothing
    if (this.state.userInfo.fName || this.state.userInfo.lName) {
      return (
        <>
          <h3>{this.state.userInfo.fName + ' ' + this.state.userInfo.lName}</h3>
        </>
      );
    }
  };

  renderAddress = () => {
    if (this.state.userInfo.address) {
      return (
        <>
          <h6>{this.state.userInfo.address}</h6>
        </>
      );
    } else if (!this.state.userInfo.address && this.state.isLoggedIn) {
      return (
        <>
          <h6>
            <Link to="/user">No address.</Link>
          </h6>
        </>
      );
    }
  };

  renderSearchForm = () => {
    return (
      <>
        <Form.Control type="text" placeholder="Find your fave..." readOnly />
      </>
    );
  };

  renderCurrentUser = () => {
    return (
      <div className="profile-header-info">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              {this.renderAvatar()}
              {this.renderName()}
              {this.renderAddress()}
              {this.renderButtons()}
            </Col>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4} className="header-search-form">
              {this.renderBasketEmoji()}
              {this.renderSearchForm()}
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  };

  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  renderBasketEmoji = () => {
    return (
      <div className="icon">
        <div
          onClick={(e) => {
            this.showModal(e);
          }}
        >
          Total:{' '}
          <Link to="#">
            ${this.state.total} <Basket size={30} />
          </Link>
        </div>
      </div>
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
