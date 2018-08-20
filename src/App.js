import React, { Component } from 'react';
import './App.css';
import service from './utils/request.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
