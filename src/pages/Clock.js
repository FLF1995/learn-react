import React, { Component } from "react";

function ActionLink() {
	function handleClick(e) {
		console.log(e)
		e.preventDefault();
		console.log('the link was clicked')
	}
	return (
		<a href="#" onClick={handleClick}>click me</a>
	)
}

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
    });
  }
  activateLasers() {
		console.log('click!')
	}

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <h2>Welcome to React</h2>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
          <div
            onClick={() =>
              this.props.history.push({
                pathname: "/app/12",
                state: {
                  id: 123
                }
              })
            }
          >
            去app页面
          </div>
          <button onClick={this.activateLasers}>Button</button>
					<ActionLink></ActionLink>
        </div> */}
      </div>
    );
  }
}

export default Clock;
