import React, { Component } from 'react';
import { OverlayTrigger, ListGroup, Tooltip } from 'react-bootstrap';
import './FoodCategories.css';

class FoodCategories extends Component {
  state = { categories: [], clickedCategory: '', hoverCategory: '', description: '' }; // items array might not be needed

  fetchMenuCategories = async () => {
    const response = await fetch('api/menu/categories');
    const categories = await response.json();
    this.setState({ categories: categories });
  };

  fetchMenuDescription = async () => {
    const response = await fetch(`api/menu/${this.state.hoverCategory}/description`);
    const description = await response.json();
    this.setState({ description: description });
  };

  handleHover = async (e, category) => {
    e.preventDefault();
    await this.setState({ hoverCategory: category });
    await this.fetchMenuDescription();
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
            <div
              onMouseOver={(e) => {
                this.handleHover(e, category);
              }}
            >
              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 100 }}
                overlay={
                  <Tooltip id={`tooltip-${category}`}>
                    <strong>{this.state.description.toString()}</strong>
                  </Tooltip>
                }
              >
                <ListGroup.Item
                  className="list-group-item-new"
                  as="li"
                  key={category}
                  onClick={(e) => this.handleClick(e, category)}
                  on
                >
                  {category}
                </ListGroup.Item>
              </OverlayTrigger>
            </div>
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
