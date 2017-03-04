import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: "",
      sequenceLength: 0,
      features: []
    };
  }

  search() {
    const URL = "https://teselagen.com/getSequence";

    fetch(URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json1 => {
      // console.log(json1);
      const sequence = json1.sequence;
      this.setState({sequence});
    });
  }

  render() {
    return (
      <div className="App">
        {this.search()}
      </div>
    );
  }
}

export default App;
