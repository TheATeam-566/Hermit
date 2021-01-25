import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

class MainPage extends Component {
  // Receiving items added to cart, calculating total,
  // and sending total & cart to header for modal use.
  state = { total: 0.0, cart: [], address: '69+Black+Hawk+Way+North+York' };

  receiveCart = (cart) => {
    this.setState({ cart: cart });

    let priceToAdd = this.state.total;

    // Calculating the total of all the items within the cart.
    this.state.cart.map((item) => {
      priceToAdd = this.state.total + item.price;
      return (priceToAdd = Number(priceToAdd.toFixed(2))); // Rounding the total to nearest cent
    });

    this.setState({ total: priceToAdd });
  };

  // This method receives the updated total and cart from Header.js and then sets the state for Main.js
  receiveCartFromModal = async (updatedCart, updatedTotal) => {
    await this.setState({ cart: updatedCart, total: updatedTotal });
  };

  render() {
    return (
      <div className="mainpage">
        <Header
          total={this.state.total}
          cart={this.state.cart}
          receiveCartFromModal={this.receiveCartFromModal}
        />
        <Route exact path="/">
          <Food receiveCart={this.receiveCart} updatedCart={this.state.cart} />
        </Route>

        <Route exact path="/OrderConfirmation">
          <OrderConfirmation
            cart={this.state.cart}
            address={this.state.address}
            subTotal={this.state.total}
          />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
