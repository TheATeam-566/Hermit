import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Mainpage from './Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Mainpage />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
