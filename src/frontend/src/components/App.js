import React from 'react';
import Menuitems from './Menuitems';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menuitems />
        <Footer />
      </div>
    );
  }
}

export default App;
