import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" href="http://localhost:8000/auth/google">
          Sign In
        </Button>
        <Button variant="outline-danger" href="http://localhost:8000/auth/logout">
          Sign Out
        </Button>
      </div>
    );
  }
}
