import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Categories extends Component {
  state = { categories: [], clickedCategory: '' };

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories, clickedCategory: '' });
  };

  handleClick = async (e, category) => {
    e.preventDefault();
    await this.setState({ clickedCategory: category });
    await this.props.onCategoryClick(this.state.clickedCategory);
  };

  renderCategories = () => {
    return (
      <div className="category-mainpage-info">
        <ListGroup as="ul">
          {this.state.categories.map((category) => (
            <ListGroup.Item
              as="li"
              key={category.title}
              onClick={(e) => this.handleClick(e, category)}
            >
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
    console.log(this.state.clickedCategory);
  }

  render() {
    return (
      <div>
        {this.renderCategories()}

        <hr />

        <br />
      </div>
    );
  }
}

export default Categories;
