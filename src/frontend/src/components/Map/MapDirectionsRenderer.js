/* global google */
import React, { Component } from 'react';
import { DirectionsRenderer } from 'react-google-maps';
import DistanceMap from './DistanceMap';

class MapDirectionsRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: null,
      error: null,
      address: this.props.address,
      origin: this.props.origin,
      travelMode: this.props.travelMode,
      distance: null,
    };
  }

  componentDidMount() {
    // use googles directions service to properly follow road outlines and "draw" the route to take to the actual google map being rendered
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: this.state.origin,
        destination: this.state.address,
        travelMode: this.state.travelMode,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          //need this to call parent function to set distance in parent
          this.props.getDistance(this.state.distance);
        } else {
          this.setState({ error: result });
        }
      }
    );
  }

  // functions below are all used to pass states used in OrderConfirmation (child -> parent)
  setDeliveryAddress = (newDeliveryAdd) => {
    this.props.getDeliveryAddress(newDeliveryAdd);
  };

  setDistance = (newDistance) => {
    this.props.getDistance(newDistance);
  };

  setDeliveryInfo = (newDelivery) => {
    this.props.getDelivery(newDelivery);
  };

  render() {
    return (
      this.state.directions && (
        <div>
          <DistanceMap
            address={this.state.address}
            origin={this.state.origin}
            travelMode={this.state.travelMode}
            getDeliveryAddress={this.setDeliveryAddress.bind(this)}
            getDistance={this.setDistance.bind(this)}
            getDelivery={this.setDeliveryInfo.bind(this)}
          ></DistanceMap>
          <DirectionsRenderer directions={this.state.directions} />
        </div>
      )
    );
  }
}

export default MapDirectionsRenderer;
