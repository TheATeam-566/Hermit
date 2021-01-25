import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import OuterDirections from './OuterDirections';

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultCenter={{ lat: 43.653225, lng: -79.383186 }} defaultZoom={10}>
      <OuterDirections address={props.address} />
    </GoogleMap>
  ))
);

export default Map;
