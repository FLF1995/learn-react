import React, { Component } from "react";


class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
			isToggleOn: true
		};
		this.handleClick = this.handleClick.bind(this)
  }
	
	handleClick() {
		this.setState(state =>({
			isToggleOn: !state.isToggleOn
		}))
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    );
  }
}

export default Toggle;


