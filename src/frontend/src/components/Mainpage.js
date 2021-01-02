import React, { Component } from 'react';
import Categories from './Categories';

export default class Mainpage extends Component {
  // https://www.golangprograms.com/how-to-pass-data-from-child-component-to-its-parent-in-reactjs.html
  // See the link above for descriptions on the multiple ways to pass data from child to parent components.
  // Note, we will need to pass data from Categories back to Mainpage in order to then render the Items component.

  render() {
    return (
      <div>
        <Categories />
      </div>
    );
  }
}
