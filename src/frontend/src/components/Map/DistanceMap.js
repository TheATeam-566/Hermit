/* global google */
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
            distance: response.rows[0].elements[0].distance.value,
            address: response.destinationAddresses[0],
          });
          //need this to call parent function to set distance in parent
          this.props.getDistance(this.state.distance);
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
      <>
        <Table className="distance-table" striped borderless hover size="sm" variant="light">
          <tbody>
            <tr>
              <td className="distance-font">
                <b style={{ fontWeight: 500 }}>Delivery Address:</b>
              </td>
              <td className="distance-font">{this.state.address}</td>
            </tr>
          </tbody>
        </Table>
        <Table className="distance-table" striped borderless hover size="sm" variant="light">
          <tbody>
            <tr>
              <td className="distance-font">
                You are located {' '}
                <b style={{ fontWeight: 500 }}>{(this.state.distance / 1000).toFixed(2)}</b> km away
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default DistanceMap;
