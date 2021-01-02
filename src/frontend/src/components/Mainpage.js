import React, { Component } from 'react';
import Categories from './Categories';
import Items from './Items';

class Mainpage extends Component {
  state = { category: '' };

  onCategoryClick = (category) => {
    this.setState({ category: category });
    //console.log(this.state.category);
  };

  render() {
    return (
      <div>
        <Categories onCategoryClick={this.onCategoryClick} />
        <Items category={this.state.category} />
      </div>
    );
  }
}

export default Mainpage;
