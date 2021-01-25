import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import OuterDirections from './OuterDirections';
import { compose, withProps, withHandlers } from 'recompose';
//import Map from './Map';

// temp test key
//const googleMapsApiKey = 'AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s';

// const Map = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultCenter={{ lat: 43.653225, lng: -79.383186 }} defaultZoom={10}>
//       <OuterDirections address={props.address} />
//     </GoogleMap>
//   ))
// );

const Map = compose(
  withProps((props) => ({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '40vh', width: '20vw' }} />,
    mapElement: <div style={{ height: '80%' }} />,
    address: props.address,
  })),
  withHandlers(
    (props) => (
      // eslint-disable-next-line no-sequences
      { distance: null },
      {
        setDistance: () => (newDistance) => ({ distance: props.getDistance(newDistance) }),
      }
    )
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultCenter={{ lat: 43.653225, lng: -79.383186 }} defaultZoom={10}>
    <OuterDirections address={props.address} getDistance={props.setDistance.bind(this)} />
  </GoogleMap>
));

class MapContainer extends Component {
  state = { address: this.props.address };

  setDistance = (newDistance) => {
    this.props.getDistance(newDistance);
  };

  MapContainerfunc = () => {
    return (
      //return the Map container
      <Map address={this.state.address} getDistance={this.setDistance.bind(this)} />
    );
  };

  render() {
    return <>{this.MapContainerfunc()}</>;
  }
}
export default MapContainer;
