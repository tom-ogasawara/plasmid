import React, { Component } from 'react';
import './App.css';

class Visualization extends Component {
  render() {
    let data = {
      sequence: "",
      sequenceLength: 0,
      features: []
    };

    data = this.props.data !== null ? this.props.data : data;

    return (
      <div className="visualization">
        {
          this.props.data !== null
          ?
            <div className="data">
              <div className="circle">
              </div>
              <div className="sequence">
              </div>
            </div>
          : <div></div>
        }
      </div>
    );
  }
}

export default Visualization;
