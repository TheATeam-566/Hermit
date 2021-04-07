import React, { Component } from 'react';
import { Button, Alert, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Userpage extends Component {
  state = {
    userInfo: {},
    cart: [],
    isLoggedIn: false,
    showSubmitAlert: false,
    showRemoveAlert: false,
  };

  fNameChange = this.fNameChange.bind(this);
  lNameChange = this.lNameChange.bind(this);
  addressChange = this.addressChange.bind(this);
  cityChange = this.cityChange.bind(this);
  avatarUrlChange = this.avatarUrlChange.bind(this);
  emailChange = this.emailChange.bind(this);

  // Calling componentWillReceiveProps within componentDidMount ensures that
  // when the component is mounted (in Main.js) that it will render
  // using the props that it is sent initially, Userpage.js isLoggedIn is set to false.
  componentDidMount = () => {
    this.componentWillReceiveProps(this.props);
  };

  componentWillReceiveProps = async (nextProps) => {
    await this.setState({
      userInfo: nextProps.userInfo,
      isLoggedIn: nextProps.isLoggedIn,
      cart: nextProps.cart,
    });
  };

  // State changing functions
  fNameChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, fName: e.target.value },
    });
  }

  lNameChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, lName: e.target.value },
    });
  }

  addressChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, address: e.target.value },
    });
  }

  cityChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, city: e.target.value },
    });
  }

  avatarUrlChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, image: e.target.value },
    });
  }

  emailChange(e) {
    this.setState({
      userInfo: { ...this.state.userInfo, email: e.target.value },
    });
  }

  // Update profile form submit event
  onSubmit = async (e, user) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Header': '*',
      },
      body: JSON.stringify(user),
    };
    this.props.receiveUserInfoFromUserPage(this.state.userInfo);
    await fetch('/user/update', requestOptions);
    await this.setState({ showSubmitAlert: true });
  };

  // Remove profile form submit event
  onSubmitRemove = async (e, user) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Header': '*',
      },
      body: JSON.stringify(user),
    };

    await fetch('/user/delete', requestOptions);
  };

  // Renders the buttons on the form
  renderSubmitButtons = () => {
    return (
      <>
        <Button
          variant="success"
          className="btn-round animation-on-hover"
          onClick={(e) => this.onSubmit(e, this.state.userInfo)}
        >
          Update Profile
        </Button>
        {this.AlertDismissibleSubmit()}
      </>
    );
  };

  // Renders the remove button
  renderRemoveButtons = () => {
    return (
      <>
        <Button
          variant="danger"
          className="btn-round animation-on-hover"
          onClick={(e) => {
            this.AlertDismissibleRemoveWrapper(e);
          }}
        >
          Remove Profile
        </Button>
        {this.AlertDismissibleRemove()}
      </>
    );
  };

  // A silly wrapper function, this is needed because
  // we were exceeding the maximum number of event defaults
  // All this does is set the state to true to show the remove dismissible
  // and calls the dismissible function
  AlertDismissibleRemoveWrapper = (e) => {
    e.preventDefault();
    this.setState({ showRemoveAlert: true });
    this.AlertDismissibleRemove();
  };

  // The alert that pops up
  // tells the user their profile has been updated
  AlertDismissibleSubmit = () => {
    return (
      <Alert show={this.state.showSubmitAlert} variant="success" className="float-right">
        <Alert.Heading>Updated!</Alert.Heading>
        <p>Your user profile has now been updated.</p>
        <p>The page will now reload.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={(e) => this.closeSubmitAlert(e)}
            variant="outline-success"
            className="btn-round animation-on-hover"
          >
            Got it, thanks.
          </Button>
        </div>
      </Alert>
    );
  };

  // The alert that pops up
  // tells the user their profile has been updated
  AlertDismissibleRemove = () => {
    return (
      <>
        <Alert show={this.state.showRemoveAlert} variant="danger" className="float-left">
          <Alert.Heading>Danger!</Alert.Heading>
          <p>Your user profile is about to be removed.</p>
          <p>Are you sure you want to proceed?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={(e) => this.closeRemoveAlert(e, this.state.userInfo)}
              variant="outline-danger"
              className="btn-round animation-on-hover"
            >
              Yes, thanks.
            </Button>
          </div>
        </Alert>
      </>
    );
  };

  // Closes the update confirmation alert panel
  closeSubmitAlert = (e) => {
    e.preventDefault();
    this.setState({ showSubmitAlert: false });
  };

  // Closes the update confirmation alert panel
  closeRemoveAlert = (e, user) => {
    e.preventDefault();
    this.onSubmitRemove(e, user);
    this.setState({ showRemoveAlert: false });
    if (!this.showRemoveAlert) {
      window.location.href = 'https://hermitapp.me';
    }
  };

  // Renders the user form
  renderForm = () => {
    return (
      <Container>
        <Row>
          <Col md={2}>
            <Link to="/orders">
              <Button className="btn-round animation-on-hover" variant="info">
                Order History
              </Button>
              <br />
              <br />
            </Link>
          </Col>
          {this.state.userInfo.isAdmin === true && (
            <Col>
              <Link to="/admin">
                <Button className="btn-round animation-on-hover float-left" variant="warning">
                  Daily Sales
                </Button>
                <br />
                <br />
              </Link>
            </Col>
          )}
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder="First Name"
                  type="text"
                  name="fName"
                  value={this.state.userInfo.fName}
                  onChange={this.fNameChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Last Name"
                  type="text"
                  name="lName"
                  value={this.state.userInfo.lName}
                  onChange={this.lNameChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.userInfo.email}
                  onChange={this.emailChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="Please enter your address"
                  type="text"
                  name="address"
                  value={this.state.userInfo.address}
                  onChange={this.addressChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="Please enter your city"
                  type="text"
                  name="city"
                  value={this.state.userInfo.city}
                  onChange={this.cityChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  placeholder="Enter image URL"
                  type="text"
                  name="avatarUrl"
                  value={this.state.userInfo.image}
                  onChange={this.avatarUrlChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="float-left">{this.renderSubmitButtons()}</div>
              <div className="float-right">{this.renderRemoveButtons()}</div>
            </Col>
          </Row>

          <Form.Group>
            <label>
              <input type="hidden" name="id" value={this.state.userInfo.id} />
            </label>
          </Form.Group>
        </Form>
      </Container>
    );
  };

  render() {
    if (this.state.isLoggedIn) {
      return <>{this.renderForm()}</>;
    }
    return (
      <>
        <h2>Please log in to view this page.</h2>
      </>
    );
  }
}

export default Userpage;
