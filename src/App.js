import React, { Component } from 'react';
import logo from './icons8.svg';
import './App.css';
import Facebook from './components/fb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
       <Facebook/>
        
        </header>
        
      </div>
    );
  }
}

export default App;
