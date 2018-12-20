import React, { Component } from 'react';
/* Core components */

/* assets */
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/App.css';
/* containers */
import Count from '../../containers/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        <Count></Count>

        </header>
      </div>
    );
  }
}

export default App;
