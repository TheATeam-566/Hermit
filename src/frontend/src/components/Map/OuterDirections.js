import React, { Component } from 'react';
import MapDirectionsRenderer from './MapDirectionsRenderer';

class OuterDirections extends Component {
  state = {
    address: this.props.address,
    distance: null,
  };

  setDistance = (newDistance) => {
    this.props.getDistance(newDistance);
  };

  setDeliveryInfo = (newDelivery) => {
    this.props.getDelivery(newDelivery);
  };

  render() {
    return (
      <>
        <MapDirectionsRenderer
          travelMode="DRIVING"
          origin="3401+Dufferin+Street+North+York"
          address={this.state.address}
          getDistance={this.setDistance.bind(this)}
          getDelivery={this.setDeliveryInfo.bind(this)}
        />
      </>
    );
  }
}

export default OuterDirections;
