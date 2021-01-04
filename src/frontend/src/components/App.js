import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Mainpage from './Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Mainpage />
        <Footer />
      </div>
    );
  }
}

export default App;
