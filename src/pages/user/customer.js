import React, { Component } from "react";
import { Select, Input, Button, Table, Pagination, Tag, message, Popconfirm } from "antd";
import RegionCascader from '../../components/regionCascader'
import "./user.scss";
import { getCustomerTableData, deleteCustomerData } from '../../api/user/customer'


const { Option } = Select;
const { Column } = Table;


class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
			regionValues: [],
			pageNo: 1,
			pageSize: 10,
			customerTableData: [],
			totalNum: null,
			selectedRowKeys: [],
    };
  }

  getRegionValues(result, values) {
    this.setState({ regionValues: values });
	}
	
	getCustomerTableData(pageNo, pageSize, type) {
		const params = {
			pageNo: pageNo,
			pageSize: pageSize,
			type: type
		}
		getCustomerTableData(params).then((res)=>{
			const data = res.data.data.map((item,index)=>{
				return {
					key: index,
					name: item.name,
					linkman: item.linkman,
					tel: item.tel,
					type: item.type,
					areaInfo: item.areaInfo,
					gmtCreate: item.gmtCreate,
					status: item.status,
					id: item.id
				}
			})
			this.setState({ customerTableData: data, totalNum: res.data.total})
		})
	}

  handleChange = (value) => {
		this.getCustomerTableData(this.state.pageNo, this.state.pageNo, value);
	}
	onPaginationChange(e) {
		this.setState({ pageNo: e });
		this.getCustomerTableData(e, this.state.pageSize);
	}
	onPageSizeChange(e, size) {
		this.setState({ pageSize: size });
		this.getCustomerTableData(this.state.pageNo, size);
	}

	rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			const keys = selectedRows.map((item)=>{
				return item.id
			})
			this.setState({ selectedRowKeys: keys})
		}
	}
	renderCustomerTable() {
		return (
			<div>
				<Table 
					pagination={false} 
					dataSource={this.state.customerTableData} 
					rowSelection={this.rowSelection}
				>
					<Column title="客户名称" dataIndex="name" key="name" />
					<Column title="客户联系人" dataIndex="linkman" key="linkman" />
					<Column title="联系方式" dataIndex="tel" key="tel" />
					<Column title="客户类型" dataIndex="type" key="type"
						render={
							(type) => {
								if (type == 0) {
									return (<span>小微园区</span>)
								} else if (type == 1) {
									return (<span>智慧旅游</span>)
								} else if (type == 2) {
									return (<span>美丽乡村</span>)
								} else if (type == 3) {
									return (<span>酒店云</span>)
								}
							}
						}
					/>
					<Column title="所属区域" dataIndex="areaInfo" key="areaInfo" />
					<Column title="添加客户时间" dataIndex="gmtCreate" key="gmtCreate" />
					<Column title="状态" dataIndex="status" key="status"
						render={
							(record) => (
								<span>{record == 0 ? <Tag color="red">禁用</Tag> : <Tag color='green'>启用</Tag>}</span>
							)
						}
					/>
					<Column title="操作" dataIndex="operation" key="operation"
						render={
							(text, record, index) => (
								<span>
									<Button type='primary' onClick={() => { this.editInfo(text, record, index)}}>编辑</Button>
									<Popconfirm title="Sure to delete?" onConfirm={() => this.deleteRow(text,record,index)}>
										<Button type='primary' danger>删除</Button>
									</Popconfirm>
								</span>
							)
						}
					/>
				</Table>
				<Pagination
					size="small"
					total={this.state.totalNum}
					showSizeChanger
					showQuickJumper
					onChange={this.onPaginationChange.bind(this)}
					onShowSizeChange={this.onPageSizeChange.bind(this)}
				/>
			</div>
		)
	}

	deleteSeveral = ()=>{
		const ids = this.state.selectedRowKeys
		ids.map(id=>{
			this.deleteCustomerData(id)
		})
	}

	deleteRow = (text, record, index)=> {
		this.deleteCustomerData(record.id)
	}

	deleteCustomerData(id) {
		deleteCustomerData(id).then((res) => {
			message.success("删除成功");
			this.getCustomerTableData(1,10)
		})
	}

	editInfo = (text, record, index) => {
		localStorage.setItem('row',JSON.stringify(record))
		this.props.history.push('/index/user/customer/add-or-edit')
	}

  render() {
    return (
      <div className="common-page-layout customer">
        <div className="title"> 客户信息管理 </div>
        <div className="search-bar">
          <Select placeholder="所有客户类型" onChange={this.handleChange}>
            <Option value="0">小微园区</Option>
            <Option value="1">智慧旅游</Option>
            <Option value="2">美丽乡村</Option>
            <Option value="3">酒店云</Option>
          </Select>
          <RegionCascader></RegionCascader>
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
				{this.renderCustomerTable()}
				<Button style={{ marginTop: "20px"}} danger onClick={this.deleteSeveral}>批量删除</Button>
      </div>
    );
	}
	
	componentDidMount() {
		this.getCustomerTableData(1, 10)
	}
}

export default Customer;