import React, { Component } from "react";
import RegionCascader from '../../components/regionCascader'

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionValues: [],
    };
  }

  getRegionValues(result, values) {
		this.setState({ regionValues: values})
	}

  render() {
    return (
      <div className="common-page-layout">
        <div className="title"> 客户信息管理 {this.state.regionValues}</div>
        <RegionCascader parent={this}></RegionCascader>
      </div>
    );
  }
}

export default Customer;