import React, { Component } from 'react';
import Header from '../Header/Header';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';

class MainPage extends Component {
  state = { total: 0.0 }; // For use in FoodCard.js to calculate the total and send to Header.

  receiveTotal = (total) => {
    this.setState({ total: total });
  };

  render() {
    return (
      <div className="mainpage">
        <Header total={this.state.total} />
        <Food receiveTotal={this.receiveTotal} />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
