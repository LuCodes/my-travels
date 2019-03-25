import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Travel</h1>
      </header>
      <Travel
          distance="465,6 km via A6"
          destination="France"
          ville="Paris"

          image="http://s1.lprs1.fr/images/2016/07/20/5980563_1-0-439018451_1000x625.jpg"
        />
      </div>
      );
    }
  }

  export default App;
