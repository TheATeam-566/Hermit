/* global google */
import React, { Component } from 'react';
import { DirectionsRenderer } from 'react-google-maps';

class MapDirectionsRenderer extends Component {
    state = {
      directions: null,
      dist: null,
      error: null,
    };
  
    componentDidMount() {
      const { travelMode } = this.props;
  
      const directionsService = new google.maps.DirectionsService();
  
      // if you're using lat:43.7263879, lng:-79.4563233, add the {}
      //The CheeseCake Factory
  
      const origin = '3401+Dufferin+Street+North+York';
  
      //TO-DO: Make it so you're grabbing the address from the User Page
      //Customer Location
      const destination = '960+McCowan+Road+Scarborough';
  
  
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

  export default MapDirectionsRenderer;