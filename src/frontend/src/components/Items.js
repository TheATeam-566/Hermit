import React, { Component } from 'react';

class Item {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class Items extends Component {
  state = {
    items: [Item],
    category: this.props.category,
    caption: '',
    linkUrl: '',
    image: '',
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ category: nextProps.category });
    this.fetchMenuItems();
  };

  fetchMenuItems = async (props) => {
    const response = await fetch(`api/menu/${this.state.category}/items`);
    const items = await response.json();
    this.setState({ caption: items.caption, linkUrl: items.linkUrl, image: items.image });
  };

  render() {
    return (
      <div>
        <h1>{this.state.caption}</h1>
      </div>
    );
  }
}

export default Items;
