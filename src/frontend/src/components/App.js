import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menuitems from './Menuitems';
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
          {/* <Menuitems /> */}
          <Mainpage />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
