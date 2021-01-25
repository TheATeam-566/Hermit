import React, { Component } from 'react';
import MapDirectionsRenderer from './MapDirectionsRenderer';

class OuterDirections extends Component {
  state = { address: this.props.address };

  render() {
    console.log(this.state.address);
    return (
      <>
        <MapDirectionsRenderer
          travelMode="DRIVING"
          origin="3401+Dufferin+Street+North+York"
          address={this.state.address}
        />
      </>
    );
  }
}

export default OuterDirections;
