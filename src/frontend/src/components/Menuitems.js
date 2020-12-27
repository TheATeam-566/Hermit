import React from 'react';

class Menuitems extends React.Component {
  state = { drinkitems: [], categories: [] };

  // Used for demo purposes
  fetchDrinkItems = async () => {
    const response = await fetch('/api/drinkitems');
    const items = await response.json();
    this.setState({ drinkitems: items });
  };

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  componentDidMount() {
    this.fetchDrinkItems();
    this.fetchMenuCategories();
  }

  render() {
    return (
      <div>
        <h2>Menu Items</h2>
        <ul>
          {this.state.drinkitems.map((drinkitem) => (
            <li key={drinkitem.id}>{drinkitem.description}</li>
          ))}
        </ul>
        <ul>
          {this.state.categories.map((category) => (
            <li key={category.title}>{category}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menuitems;
