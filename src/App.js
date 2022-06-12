import React from 'react';
import Quote from './quote-machine/Quote.js';
import styles from './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className="App" style={styles}>
        <Quote />
      </div>
    );
  }
}

export default App;
