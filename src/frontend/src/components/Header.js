import React from 'react';
import { Button, Container, Col, Row, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Basket, Wallet2 } from 'react-bootstrap-icons';
import './Header.css';

class Header extends React.Component {
  state = { avatarURL: '', name: '', address: '', isLoggedIn: false, total: '0.00' };

  async componentDidMount() {
    await this.fetchUser();
  }

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
          alt=""
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
            <Link to="/#">No address.</Link>
          </h6>
        </div>
      );
    }
  };

  renderBasketEmoji = () => {
    return (
      <div className="icon">
        <Link to="/#">
          <Basket size={30} /> ${this.state.total}
        </Link>
      </div>
    );
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

  render() {
    return <div>{this.renderCurrentUser()}</div>;
  }
}

export default Header;
