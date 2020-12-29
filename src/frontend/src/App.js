import React from 'react';
import Menuitems from './components/Menuitems';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menuitems />
        <Footer />
      </div>
    );
  }
}

export default App;
