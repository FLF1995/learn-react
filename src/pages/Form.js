import React, { Component } from "react";
import "./App.css";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "mango"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
		alert("你喜欢的风味: " + this.state.value);
		event.preventDefault();
	}

  render() {
    return (
      <div className="content-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            选择你喜欢的风味:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default NameForm;
