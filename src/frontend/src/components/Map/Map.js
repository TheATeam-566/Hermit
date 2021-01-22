/* global google */
import { extend } from 'lodash';
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, DirectionsRenderer } from 'react-google-maps';

var length = 0;
var time = 0;
var userAddress = '';

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultCenter={{ lat: 43.653225, lng: -79.383186 }} defaultZoom={10}>
      <MapDirectionsRenderer travelMode={google.maps.TravelMode.DRIVING} />
    </GoogleMap>
  ))
);

class MapDirectionsRenderer extends Component {
  state = {
    directions: null,
    dist: null,
    error: null,
  };

  componentDidMount() {
    const { travelMode } = this.props;

    const directionsService = new google.maps.DirectionsService();
    const service = new google.maps.DistanceMatrixService();

    // if you're using lat:43.7263879, lng:-79.4563233, add the {}
    //The CheeseCake Factory

    const origin = '3401+Dufferin+Street+North+York';

    //TO-DO: Make it so you're grabbing the address from the User Page
    //Customer Location
    const destination = '960+McCowan+Road+Scarborough';

    const matrixOptions = {
      origins: [origin],
      destinations: [destination],
      travelMode: travelMode,
      unitSystem: google.maps.UnitSystem.METRIC,
    };

    function callback(response, status) {
      if (status !== 'OK') {
        alert('Error with distance matrix');
        return;
      }

      console.log(response);
      //this.setState(() => ({ dist: response.rows[0].elements[0].distance.value }));
      length = response.rows[0].elements[0].distance.text;
      time = response.rows[0].elements[0].duration.text;
      userAddress = response.destinationAddresses[0];
      console.log(length);
      console.log(time);

      // const outputDiv = document.getElementById('output');
      // const outputDiv1 = document.getElementById('map');

      // outputDiv.innerText = length;
      // outputDiv1.innerText = time;

      //TO-DO: Figure out a way to display the distance and the duration between the two points on the screen
    }

    service.getDistanceMatrix(matrixOptions, callback);

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          this.setState({ error: result });
        }
      }
    );
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }

    return this.state.directions && <DirectionsRenderer directions={this.state.directions} />;
  }
}

export { length, time, userAddress };
export default Map;

// TODO:

// 2) Render the map in a container
// 3) Create the confirmation page
