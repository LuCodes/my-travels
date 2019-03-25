import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";
import Travels from "./Travels";

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

      image="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg"
      />

      <Travel
      distance="195,3 km via A6"
      destination="France"
      ville="Dijon"

      image="https://diplomeo-static.com/news-files/14000/14400/14457/Dijon%2C_France_%2826304675813%29.jpg"
      /> 

      <Travels/>
      </div>
      );
    }
  }

  export default App;
