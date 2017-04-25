import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import countries from 'country-list';

const contryNames = countries().getNames();

class App extends Component {

  state = {
    selected: [],
    controlled: false,
  };

  handleInputChange = (input) => {
    console.log('input-change: ', input);
    this.setState({
      selected: [input],
    });
  };

  handleChange = (selected) => {
    console.log('onchange: ', selected);
    this.setState({ selected });
  };

  render() {
    const { selected, controlled, deactivateOnInputChange } = this.state;

    const typeaheadProps = controlled ? {
      onChange: this.handleChange,
      onInputChange: deactivateOnInputChange ? undefined : this.handleInputChange,
      selected,
    } : {};

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className="row">
            <label>
              controlled
              <input type="checkbox"
                checked={this.state.controlled}
                onChange={() => this.setState({controlled: !controlled})}
              />
            </label>
          </div>
          <div className="row">
            <label>
              deactivate onInputChange
              <input type="checkbox"
                checked={this.state.deactivateOnInputChange}
                onChange={() => this.setState({deactivateOnInputChange: !deactivateOnInputChange})}
              />
            </label>
          </div>
          <div className="row">
            <Typeahead
              options={contryNames}
              {...typeaheadProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
