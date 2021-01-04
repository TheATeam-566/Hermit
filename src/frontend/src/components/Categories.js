import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Categories extends Component {
  state = { categories: [] };

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  renderCategories = () => {
    return (
      <div className="category-mainpage-info">
        <ListGroup as="ul">
          {this.state.categories.map((category) => (
            <ListGroup.Item as="li" key={category.title}>
              {category}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <br />
        <br />
      </div>
    );
  };

  componentDidMount() {
    this.fetchMenuCategories();
  }

  render() {
    return (
      <div>
        {this.renderCategories()}

        <br />
      </div>
    );
  }
}

export default Categories;
