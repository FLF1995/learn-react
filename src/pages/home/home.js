import React, { Component } from "react";
import './home.scss'

class Home extends Component {
  goToNotice() {
    console.log(111);
    this.props.history.push("/index/home/notice");
  }
  render() {
    return (
      <div className="welcome-box">
        <div>慧旅云管理平台，欢迎访问！</div>
        <div className="cursor-pointer" onClick={this.goToNotice.bind(this)}>...</div>
      </div>
    );
  }
}

export default Home;

