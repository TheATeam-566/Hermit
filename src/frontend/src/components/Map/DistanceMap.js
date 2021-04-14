/* global google */
import React, { Component } from 'react';

class DistanceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      address: this.props.address,
      origin: this.props.origin,
      travelMode: this.props.travelMode,
      persistDelivery: {
        driveTime: 0,
        KM: 0,
        destinationAddress: this.props.address,
        deliveryAddress: this.props.origin,
      },
    };
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  // Use google Distance matrix to calculate the distance from point A to point B following google maps road outlines
  onScriptLoad() {
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [this.state.origin],
        destinations: [this.state.address],
        travelMode: this.state.travelMode,
      },
      (response, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          this.setState({
            distance: response.rows[0].elements[0].distance.value,
            address: response.destinationAddresses[0],
            persistDelivery: {
              driveTime: response.rows[0].elements[0].duration.value,
              KM: response.rows[0].elements[0].distance.value,
              destinationAddress: this.props.address,
              deliveryAddress: this.props.origin,
            },
          });
          //need this to call parent function to set distance in parent
          this.props.getDistance(this.state.distance);
          this.props.getDelivery(this.state.persistDelivery);
          this.props.getDeliveryAddress(this.state.address);
        }
      }
    );
  }

  componentDidMount() {
    // check if the google maps API script has been loaded onto the current page if not load it
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyByf4_XDtDFjNH3e5-T9KrL2Rt5ejHo2p0&libraries=geometry,drawing,places';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <></>;
  }
}

export default DistanceMap;
