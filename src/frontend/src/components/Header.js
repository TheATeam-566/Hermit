import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Header.css';

class Header extends React.Component {
  state = { avatarURL: '', name: '', address: '' };

  fetchUser = async () => {
    const response = await fetch('auth/current_user');
    const userInfo = await response.json();

    const avatarURL = userInfo.image;
    const name = userInfo.fName + ' ' + userInfo.lName;
    const address = userInfo.address;

    this.setState({ avatarURL: avatarURL, name: name, address: address });
  };

  renderCurrentUser = () => {
    return (
      <div className="profile-header-info">
        <Image className="profile-header-img" src={`${this.state.avatarURL}`} alt="" rounded />

        <h4>{this.state.name}</h4>

        <h2>{this.state.address}</h2>

        <br />
        <br />
      </div>
    );
  };

  async componentDidMount() {
    await this.fetchUser();
  }

  render() {
    return (
      <div>
        {this.renderCurrentUser()}

        <hr />

        <Button variant="primary" href="/auth/google/">
          Sign In
        </Button>

        <Button variant="outline-danger" href="/auth/logout/">
          Sign Out
        </Button>

        <br />
      </div>
    );
  }
}

export default Header;
