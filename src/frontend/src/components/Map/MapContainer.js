import React, { Component } from 'react';
import Map from './Map';

// temp test key
const googleMapsApiKey = 'AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s';

class MapContainer extends Component {
  state = { address: this.props.address };

  MapContainerfunc = () => {
    return (
      //return the Map container
      <Map
        googleMapURL={
          'https://maps.googleapis.com/maps/api/js?key=' +
          googleMapsApiKey +
          '&libraries=geometry,drawing,places'
        }
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '40vh', width: '20vw' }} />}
        mapElement={<div style={{ height: '80%' }} />}
        address={this.state.address}
      />
    );
  };

  render() {
    return <>{this.MapContainerfunc()}</>;
  }
}
export default MapContainer;
