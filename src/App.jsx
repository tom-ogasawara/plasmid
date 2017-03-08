import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: null,
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
        sequence,
        sequenceLength,
        features
      });
    });
  }

  renderLabel() {
    return(
      <div className="plasmid-label">
        <div className="plasmid-name">Plasmid X</div>
        <div className="sequence-length">
          {this.state.sequenceLength} bp
        </div>
      </div>
    );
  }

  renderFeatures() {
    const featureList = this.state.features;
    const featureDivs = [];

    for (let i = 0; i < this.state.features.length; i++) {
      let my_color = "blue";

      featureDivs.push(
        <div
          className="feature"
          id={i}
          key={i}
          style={
            {transform:rotate(`${featureList[i].index}deg`)}
          }>
          {featureList[i].name} <br />
          {featureList[i].index} bp <br />
          |
        </div>
      );
    }

    return featureDivs;
  }

  renderSequence() {
    return(
      <div className="sequence">
        Sequence: <br />
        {this.state.sequence}
      </div>
    );
  }

  // styleFeatures() {
  //   for (let i = 0; i < this.state.features.length; i++) {
  //     document.getElementById(i).style.color = 'red';
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="App-title">Plasmid Visualization</div>
          <ButtonToolbar className="search-button">
            <Button
              onClick={() => this.search()}
              bsStyle="primary"
              bsSize="large">
              Load New Plasmid
            </Button>
          </ButtonToolbar>
        {
          this.state.sequence !== null
          ?
            <div className="data">
              <div className="circle"></div>
              {this.renderLabel()}
              {this.renderFeatures()}
              {this.renderSequence()}
            </div>
          : <div></div>
        }

      </div>
    );
  }
}

export default App;
