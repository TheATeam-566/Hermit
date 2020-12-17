import React, { Component } from 'react';

class Menuitems extends Component {
  constructor() {
    super();
    this.state = {
      menuitems: [],
      drinkitems: [],
    };
  }

  componentDidMount() {
    fetch('/drinkitems')
      .then((res) => res.json())
      .then((drinkitems) => this.setState({ drinkitems }));

    fetch('/menuitems')
      .then((res) => res.json())
      .then((menuitems) => this.setState({ menuitems }));
  }

  render() {
    return (
      <div>
        <h2>Menu Items</h2>
        <ul>
          {this.state.menuitems.map((menuitem) => (
            <li key={menuitem.id}>{menuitem.description}</li>
          ))}
        </ul>
        <ul>
          {this.state.drinkitems.map((drinkitem) => (
            <li key={drinkitem.id}>{drinkitem.description}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menuitems;
