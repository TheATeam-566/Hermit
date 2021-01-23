/* global google */
import React, { Component } from 'react';

class DistanceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddr: null,
      cheeseCake: null,
      distance: null,
    };
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const origin = '3401+Dufferin+Street+North+York';
    const destination = '960+McCowan+Road+Scarborough';

    this.setState({
      userAddr: destination,
      cheeseCake: origin,
    });

    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          this.setState({
            distance: response.rows[0].elements[0].distance.text,
            userAddr: response.destinationAddresses[0],
          });
          console.log(response);
        }
      }
    );
  }

  componentDidMount() {
    if (!window.google) {
      window.addEventListener('load', (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id={this.props.id}>
        <br />
        <label>Destination:{this.state.userAddr}</label>
        <br />
        <label>You are located {this.state.distance} away</label>
      </div>
    );
  }
}

export default DistanceMap;
