import React from 'react';

class Menuitems extends React.Component {
  state = { categories: [] };

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  componentDidMount() {
    this.fetchMenuCategories();
  }

  render() {
    return (
      <div>
        <h2>Menu Items</h2>
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
