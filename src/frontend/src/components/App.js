import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
