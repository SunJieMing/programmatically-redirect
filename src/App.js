import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/items">Items</Link>
        <br/>
        <Link to="/new-item">Add a new item</Link>
      </div>
    );
  }
}

export default App;
