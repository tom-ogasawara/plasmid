import React, { Component } from 'react';
import {
  FormGroup,
  InputGroup,
  Button,
  ButtonToolbar
} from 'react-bootstrap';
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
            <ButtonToolbar className="search-button">
              <Button onClick={() => this.search()} bsStyle="primary" bsSize="large">Load New Plasmid</Button>
            </ButtonToolbar>
          </InputGroup>
        </FormGroup>
        {
          this.state.sequence !== null
          ?
            <div className="data">
              <div className="circle"></div>
              <div className="plasmid-label">
                <div className="plasmid-name">Plasmid X</div>
                <div className="sequence-length">
                  {this.state.sequenceLength} bp
                </div>
              </div>
              <div className="sequence">
                {this.state.sequence}
              </div>
            </div>
          : <div></div>
        }

      </div>
    );
  }
}

export default App;
