import React, { Component } from 'react';
import { OverlayTrigger, ListGroup, Tooltip } from 'react-bootstrap';
import './FoodCategories.css';

class FoodCategories extends Component {
  state = { categories: [], clickedCategory: '', hoverCategory: '', description: '' };

  // Receive categories from backend/database
  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  // Receive each category description for the use of the onHover feature
  fetchMenuDescription = async () => {
    const response = await fetch(`api/menu/${this.state.hoverCategory}/description`);
    const description = await response.json();
    this.setState({ description: description });
  };

  // onHover handler for setting state for category description
  handleHover = async (e, category) => {
    e.preventDefault();
    await this.setState({ hoverCategory: category });
    await this.fetchMenuDescription();
  };

  // onClick handler for clicking on a category
  handleClick = async (e, category) => {
    e.preventDefault();
    await this.setState({ clickedCategory: category });
    await this.props.onCategoryClick(this.state.clickedCategory);
  };

  // Logic to render the list of categories and use tooltips for onHover description
  renderCategories = () => {
    return (
      <div>
        <ListGroup className="list-group-ul">
          {this.state.categories.map((category) => (
            <div
              onMouseOver={(e) => {
                this.handleHover(e, category);
              }}
            >
              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 100 }}
                overlay={
                  <Tooltip id={`tooltip-${category}`} className="tooltip-hover">
                    <strong className="tooltip-text">{this.state.description.toString()}</strong>
                  </Tooltip>
                }
              >
                <ListGroup.Item
                  className="list-group-item-new "
                  as="li"
                  key={category}
                  onClick={(e) => this.handleClick(e, category)}
                  on
                >
                  <div className="category-text">{category}</div>
                </ListGroup.Item>
              </OverlayTrigger>
            </div>
          ))}
        </ListGroup>
      </div>
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
