import React from 'react';
import Menuitems from './Menuitems';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Menuitems />
      </div>
    );
  }
}

export default App;
