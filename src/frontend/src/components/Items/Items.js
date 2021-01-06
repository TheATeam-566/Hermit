import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Items extends Component {
  state = { items: [], category: '' };

  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ category: nextProps.category });
    await this.fetchMenuItems();
  };

  fetchMenuItems = async (props) => {
    const response = await fetch(`api/menu/${this.state.category}/items`);
    const items = await response.json();
    this.setState({ items: items });
  };

  renderCategories = () => {
    return (
      <div>
        {Object.values(this.state.items).map((item) => (
          <div className="category-mainpage-info">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.caption}</Card.Title>
                <Card.Text>A delicious item 🦆</Card.Text>
                {/* Logic to render price a button if we have no price */}
                {item.price && <Card.Text>${item.price}</Card.Text>}
                {!item.price && <Card.Text>No Price</Card.Text>}
                {item.price && <Button variant="primary">Add to Cart</Button>}
                {!item.price && (
                  <Button variant="secondary" disabled>
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <div>{this.renderCategories()}</div>;
  }
}

export default Items;
