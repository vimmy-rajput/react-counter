import React, { Component } from 'react';
import Header from './components/Header';
import Clicker from './components/Clicker';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Clicker />
      </div>
    );
  }
}

export default App;
