import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import OuterDirections from './OuterDirections';
import { compose, withProps, withHandlers } from 'recompose';

const Map = compose(
  withProps((props) => ({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '32vh', width: '22vw' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    address: props.address,
  })),
  withHandlers(
    (props) => (
      // eslint-disable-next-line no-sequences
      { distance: null, deliveryInfo: null, deliveryAddress: null },
      {
        setDistance: () => (newDistance) => ({ distance: props.getDistance(newDistance) }),
        setDeliveryInfo: () => (newDelivery) => ({ deliveryInfo: props.getDelivery(newDelivery) }),
        setDeliveryAddress: () => (newDeliveryAdd) => ({
          deliveryAddress: props.getDeliveryAddress(newDeliveryAdd),
        }),
      }
    )
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
    defaultZoom={10}
    defaultOptions={{
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }],
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }],
        },
      ],
    }}
  >
    <OuterDirections
      address={props.address}
      getDeliveryAddress={props.setDeliveryAddress.bind(this)}
      getDistance={props.setDistance.bind(this)}
      getDelivery={props.setDeliveryInfo.bind(this)}
    />
  </GoogleMap>
));

class MapContainer extends Component {
  state = { address: this.props.address };

  setDeliveryAddress = (newDeliveryAdd) => {
    this.props.getDeliveryAddress(newDeliveryAdd);
  };

  setDistance = (newDistance) => {
    this.props.getDistance(newDistance);
  };

  setDeliveryInfo = (newDelivery) => {
    this.props.getDelivery(newDelivery);
  };

  MapContainerfunc = () => {
    return (
      <Map
        address={this.state.address}
        getDeliveryAddress={this.setDeliveryAddress.bind(this)}
        getDistance={this.setDistance.bind(this)}
        getDelivery={this.setDeliveryInfo.bind(this)}
      />
    );
  };

  render() {
    return <>{this.MapContainerfunc()}</>;
  }
}
export default MapContainer;
