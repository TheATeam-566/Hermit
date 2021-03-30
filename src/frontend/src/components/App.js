import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
// styles
import '../assets/css/blk-design-system-pro-react.css';
import '../assets/css/nucleo-icons.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
