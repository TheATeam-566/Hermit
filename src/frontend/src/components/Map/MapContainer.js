import Map from './Map';

// temp test key
const googleMapsApiKey = 'AIzaSyCmLgpiiClR8g_H_BILfIPYMqyM1efck6s';

const MapContainer = () => {
  return (
    //return the Map container
    <Map
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        googleMapsApiKey +
        '&libraries=geometry,drawing,places'
      }
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '30vh', width: '20vw' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
};

export default MapContainer;
