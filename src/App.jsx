import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
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
    .then(json => {
      const sequence = json.sequence;
      const sequenceLength = json.sequenceLength;
      const features = json.features;

      this.setState({
        sequence: sequence,
        sequenceLength: sequenceLength,
        features: features
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Plasmid Visualization</div>
        <FormGroup className='search-button'>
          <InputGroup>
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.sequence !== null
          ?
            <div>
              {this.state.sequence}
            </div>
          : <div></div>
        }

      </div>
    );
  }
}

export default App;
