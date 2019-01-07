import React, { Component } from 'react';
import './App.css';
import BodyComponent from './Component/BodyComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderComponent />
          <BodyComponent />
          <FooterComponent />
      </div>
    );
  }
}

export default App;
