/* global google */
import React, { Component } from 'react';
let exportDist = '';

class DistanceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      address: this.props.address,
      origin: this.props.origin,
      travelMode: this.props.travelMode,
    };
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

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
            distance: response.rows[0].elements[0].distance.text,
            address: response.destinationAddresses[0],
          });
          exportDist = this.state.distance;
        }
      }
    );
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s&libraries=geometry,drawing,places';
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
    return (
      <div style={{ width: 500, height: 500 }}>
        <br />
        <label>Destination:{this.state.address}</label>
        <br />
        <label>You are located {this.state.distance} away</label>
      </div>
    );
  }
}
export { exportDist };
export default DistanceMap;
