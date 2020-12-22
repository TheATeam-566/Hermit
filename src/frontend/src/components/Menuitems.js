import React from 'react';

class Menuitems extends React.Component {
  state = { menuitems: [], drinkitems: [] };

  // Used for demo purposes
  fetchMenuItems = async () => {
    const response = await fetch('/api/menuitems');
    const items = await response.json();
    this.setState({ menuitems: items });
  };

  // Used for demo purposes
  fetchDrinkItems = async () => {
    const response = await fetch('/api/drinkitems');
    const items = await response.json();
    this.setState({ drinkitems: items });
  };

  componentDidMount() {
    this.fetchMenuItems();
    this.fetchDrinkItems();
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
