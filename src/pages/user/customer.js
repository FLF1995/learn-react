import React, { Component } from "react";
import { Select, Input, Button, Table } from "antd";
import RegionCascader from '../../components/regionCascader'
import "./user.scss";


const { Option } = Select;
const columns = [
  { title: "省", dataIndex: "province", key: "province" },
  { title: "市", dataIndex: "city", key: "city" },
  { title: "区县", dataIndex: "country", key: "country" },
  { title: "区域类型", dataIndex: "type", key: "type" },
  { title: "区域名称", dataIndex: "name", key: "name" },
];

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionValues: [],
    };
  }

  getRegionValues(result, values) {
    this.setState({ regionValues: values });
  }

  handleChange() {

	}

  render() {
    return (
      <div className="common-page-layout customer">
        <div className="title"> 客户信息管理 </div>
        <div className="search-bar">
          <Select placeholder="所有客户类型" onChange={this.handleChange}>
            <Option value="6">小微园区</Option>
            <Option value="4">智慧旅游</Option>
            <Option value="5">美丽乡村</Option>
            <Option value="7">酒店云</Option>
          </Select>
          <RegionCascader parent={this}></RegionCascader>
          <div className="search-item">
            <span>客户名称：</span>
            <Input></Input>
          </div>
          <div className="search-item">
            <span>联系方式：</span>
            <Input></Input>
          </div>
          <Button type="primary">查询</Button>
        </div>
        <Table
          columns={columns}
          pagination={false}
        ></Table>
      </div>
    );
  }
}

export default Customer;