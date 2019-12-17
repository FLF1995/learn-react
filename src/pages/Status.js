import React, { Component } from "react";
import "./App.css";

	function BoilingVerdict(props) {
		if(props.celsius >= 100) {
			return <p>The water would boil.</p>
		} else {
			return <p>The water would not boil.</p>;
		}
	}
	const scaleNames = {
		c: 'Celsius',
		f: 'Fahrenheit'
	}

	class Caculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        temperature: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
			this.setState({ temperature: event.target.value });
		}

    render() {
			const temperature = this.state.temperature
			const scale = this.props.scale
      return (
        <div className="content-wrapper">
          <p>Enter temperature in {scaleNames[scale]}:</p>
          <input value={this.state.temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
      );
    }
  }

export default Caculator;