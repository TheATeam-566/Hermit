import React, { Component } from 'react';
import Header from '../Header/Header';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Header />
        <Food />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
