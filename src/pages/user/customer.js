import React, { Component } from "react";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
	}
	
	render() {
		return (
      <div className="common-page-layout">
        <div className="title"> 客户信息管理 </div>
      </div>
    );
	}
}

export default Customer;