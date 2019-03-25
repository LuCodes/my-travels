import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src="https://blogvoyages.fr/wp-content/uploads/2014/05/voyage.jpg" alt="image3" />
      <h1 className="App-title">Travel</h1>
      </header>
      <Travel
      distance="465,6 km via A6"
      destination="France"
      ville="Paris"

      image="http://s1.lprs1.fr/images/2016/07/20/5980563_1-0-439018451_1000x625.jpg"
      />

      <Travel
      distance2="195,3 km via A6"
      destination2="France"
      ville2="Dijon"

      image2="https://diplomeo-static.com/news-files/14000/14400/14457/Dijon%2C_France_%2826304675813%29.jpg"
      />
      </div>
      );
    }
  }

  export default App;
