import React, { Component } from "react";
import { Tabs, Input, Button, Table, Pagination } from "antd";
import "./user.scss";
import '../../pages/common.scss'
import { searchRegion } from "../../api/user/region";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const columns = [
  { title: "省", dataIndex: "province", key: "province" },
  { title: "市", dataIndex: "city", key: "city" },
  { title: "区县", dataIndex: "country", key: "country" },
  { title: "区域类型", dataIndex: "type", key: "type" },
  { title: "区域名称", dataIndex: "name", key: "name" }
];

class Region extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionData: [],
      pageNo: 1,
      pageSize: 10,
      totalNum: null,
      search: "",
    };
  }

  getRegionData(pageNo, pageSize) {
    const params = { pageNo: pageNo, pageSize: pageSize };
    searchRegion(params).then((res) => {
      this.setState({
        regionData: res.data.data.map((item, index) => {
          return {
            province: item.province,
            city: item.city,
            country: item.country,
            type: item.type,
            name: item.name,
            key: index,
          };
        }),
        totalNum: res.data.total,
      });
    });
  }

  componentDidMount() {
    this.getRegionData(1, 10);
  }

  onPaginationChange(e) {
    this.setState({ pageNo: e });
    this.getRegionData(e, this.state.pageSize);
  }
  onPageSizeChange(e, size) {
    this.setState({ pageSize: size });
    this.getRegionData(this.state.pageNo, size);
  }
  changeInput(e) {
    console.log(e);
	}

  render() {
    return (
      <div className="common-page-layout">
        <div className="title"> 区域管理 </div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="区域查询" key="1">
            <div className="search-bar">
              <span>关键字：</span>
              <Input
                onChange={this.changeInput}
                placeholder="请输入"
              />
              <Button type="primary">查询</Button>
            </div>
            <div className="search-result">
              查询结果：共查到 {this.state.totalNum} 条相关信息！
            </div>
            <Table
              columns={columns}
              dataSource={this.state.regionData}
              pagination={false}
            />
            <Pagination
              size="small"
              total={this.state.totalNum}
              showSizeChanger
              showQuickJumper
              onChange={this.onPaginationChange.bind(this)}
              onShowSizeChange={this.onPageSizeChange.bind(this)}
            />
          </TabPane>

          <TabPane tab="区域添加" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Region;
