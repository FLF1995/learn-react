import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
