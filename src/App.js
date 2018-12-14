import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staff from './components/staff';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Staff/>
      </div>
    );
  }
}

export default App;
