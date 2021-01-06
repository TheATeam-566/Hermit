import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
