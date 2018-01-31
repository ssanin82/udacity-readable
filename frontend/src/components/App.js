import React, { Component } from 'react';
import './App.css';
import { getCategories } from '../utils/api.js';

class App extends Component {
  state = {
    categories: []
  };

  constructor() {
    super();
    getCategories().then(data => {
       this.setState(data);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.categories.map(cat =>
            (<li key={cat.path}><h1>{cat.name}</h1></li>)
          )}
        </ul>
      </div>
    );
  }
}

export default App;
