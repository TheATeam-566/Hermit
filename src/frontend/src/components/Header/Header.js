import React from 'react';
import { Button, Container, Col, Row, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Basket } from 'react-bootstrap-icons';
import CartModal from './CartModal';
import './Header.css';

class Header extends React.Component {
  state = { avatarURL: '', name: '', address: '', isLoggedIn: true, total: '0.00', cart: [] };

  componentDidMount = async () => {
    await this.fetchUser();
  };

  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ total: nextProps.total, cart: nextProps.cart });
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

  fetchUser = async () => {
    const response = await fetch('auth/current_user');
    const userInfo = await response.json();

    const avatarURL = userInfo.image;
    const name = userInfo.fName + ' ' + userInfo.lName;
    const address = userInfo.address;

    this.setState({ avatarURL: avatarURL, name: name, address: address, isLoggedIn: true });
  };

  renderButtons = () => {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <br />
          <Button variant="primary" href="/auth/google/">
            Sign In
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button variant="outline-danger" href="/auth/logout/">
            Sign Out
          </Button>
        </div>
      );
    }
  };

  renderAvatar = () => {
    return (
      <div>
        <Image
          className="profile-header-img"
          src={`${this.state.avatarURL}`}
          alt="User Avatar"
          roundedCircle
        />
      </div>
    );
  };

  renderName = () => {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  };

  renderAddress = () => {
    if (this.state.address) {
      return (
        <div>
          <h6>{this.state.address}</h6>
        </div>
      );
    } else if (!this.state.address && this.state.isLoggedIn) {
      return (
        <div>
          <h6>
            <Link to="#">No address.</Link>
          </h6>
        </div>
      );
    }
  };

  renderSearchForm = () => {
    return (
      <div>
        <Form.Control type="text" placeholder="Find your fave..." readOnly />
      </div>
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
      <div>
        {this.renderCurrentUser()}
        <CartModal
          onClose={this.showModal}
          show={this.state.show}
          children={this.state.cart}
          updateCartQuantities={this.updateCartQuantities}
        />
      </div>
    );
  }
}

export default Header;
