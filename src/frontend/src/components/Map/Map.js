/* global google */
import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapDirectionsRenderer from './MapDirectionsRenderer';

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultCenter={{ lat: 43.653225, lng: -79.383186 }} defaultZoom={10}>
      <MapDirectionsRenderer travelMode={google.maps.TravelMode.DRIVING} />
    </GoogleMap>
  ))
);

export default Map;
