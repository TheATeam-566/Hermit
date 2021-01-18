import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class FoodCategories extends Component {
  state = { categories: [], clickedCategory: '' };

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  handleClick = async (e, category) => {
    e.preventDefault();
    await this.setState({ clickedCategory: category });
    await this.props.onCategoryClick(this.state.clickedCategory);
  };

  renderCategories = () => {
    return (
      <>
        <ListGroup as="ul">
          {this.state.categories.map((category) => (
            <ListGroup.Item as="li" key={category} onClick={(e) => this.handleClick(e, category)}>
              {category}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <br />
        <br />
      </>
    );
  };

  componentDidMount() {
    this.fetchMenuCategories();
  }

  render() {
    return (
      <>
        {this.renderCategories()}
        <br />
      </>
    );
  }
}

export default FoodCategories;
