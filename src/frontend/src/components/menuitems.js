import React, { Component } from 'react';

class Menuitems extends Component {
  constructor() {
    super();
    this.state = {
      menuitems: [],
    };
  }

  componentDidMount() {
    fetch('/api/menuitems')
      .then((res) => res.json())
      .then((menuitems) =>
        this.setState({ menuitems }, () => console.log('Menuitems fetched...', menuitems))
      );
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
      </div>
    );
  }
}

export default Menuitems;
