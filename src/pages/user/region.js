import React, { Component } from "react";
import { Tabs, Input, Button, Table, Pagination, Form, Cascader, Select, message } from "antd";
import "./user.scss";
import '../../pages/common.scss'
import { searchRegion, getArea, addNewArea } from "../../api/user/region";

const { TabPane } = Tabs;

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
      areaOptions: [],
      defaultActiveKey: "1",
    };
  }

  componentDidMount() {
    this.getRegionData(1, 10);
    this.getAreaData(10000000, 1);
  }

  //表单
  layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  RegionForm = () => {
    const [form] = Form.useForm();
    const onReset = () => {
      form.resetFields();
    };
    const onFinish = (values) => {
      const params = {
        name: values.name,
        type: values.type,
        parentCode: values.region[values.region.length - 1],
        remark: values.remark,
      };
      addNewArea(params).then((res) => {
        message.success("新增成功");
        setTimeout(() => {
          this.setState({ defaultActiveKey: "1" });
          this.getRegionData(1, 10);
          form.resetFields();
        }, 1000);
      });
		};
		
    const { Option } = Select;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    const loadAreaData = (selectedOptions) => {
      if (selectedOptions.length == 1) {
        const targetOption2 = selectedOptions[selectedOptions.length - 1];
        targetOption2.loading = true;
        this.getAreaData(selectedOptions[0].value, 2, targetOption2);
      } else if (selectedOptions.length == 2) {
        const targetOption3 = selectedOptions[selectedOptions.length - 1];
        this.getAreaData(selectedOptions[1].value, 3, targetOption3);
      }
    };

    return (
      <Form
        {...this.layout}
        name="basic"
        form={form}
        initialValues={{ country: "中国" }}
        onFinish={onFinish}
      >
        <Form.Item label="国家" name="country">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="选择地区"
          name="region"
          rules={[{ required: true, message: "请选择地区" }]}
        >
          <Cascader
            options={this.state.areaOptions}
            loadData={loadAreaData}
            changeOnSelect
          />
        </Form.Item>

        <Form.Item
          label="区域类型"
          name="type"
          rules={[{ required: true, message: "请选择区域类型" }]}
        >
          <Select placeholder="请选择区域类型" onChange={handleChange}>
            <Option value="4">村庄</Option>
            <Option value="5">街道/乡镇</Option>
            <Option value="6">片区</Option>
            <Option value="7">其他</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="区域名称"
          name="name"
          rules={[{ required: true, message: "请填写地区名称" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="备注说明" name="remark">
          <Input type="textarea" />
        </Form.Item>

        <Form.Item {...this.tailLayout}>
          <Button type="primary" htmlType="立即创建"> 立即创建 </Button>
          <Button htmlType="重置" onClick={onReset}>  重置 </Button>
        </Form.Item>
      </Form>
    );
  };

  //获取区域表格数据
  getRegionData(pageNo, pageSize, search) {
    const params = { pageNo: pageNo, pageSize: pageSize, search: search };
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
  onPaginationChange(e) {
    this.setState({ pageNo: e });
    this.getRegionData(e, this.state.pageSize);
  }
  onPageSizeChange(e, size) {
    this.setState({ pageSize: size });
    this.getRegionData(this.state.pageNo, size);
  }
  //获取省市区级联数据
  getAreaData(code, level, targetOption) {
    const params = { code: code };
    getArea(params).then((res) => {
      switch (level) {
        case 1:
          this.setState({
            areaOptions: res.data.data.map((item) => {
              return {
                value: item.code,
                label: item.name,
                isLeaf: false,
              };
            }),
          });
          break;
        case 2:
          targetOption.loading = false;
          targetOption.children = res.data.data.map((item) => {
            return {
              value: item.code,
              label: item.name,
              isLeaf: false,
            };
          });
          this.setState({
            options: [...this.state.areaOptions],
          });
          break;
        case 3:
          targetOption.children = res.data.data.map((item) => {
            return {
              value: item.code,
              label: item.name,
              isLeaf: true,
            };
          });
          this.setState({
            options: [...this.state.areaOptions],
          });
        default:
          break;
      }
    });
  }
  changeInput(e) {
    this.setState({ search: e.target.value });
  }
  search() {
    this.getRegionData(1, 10, this.state.search);
  }
  callback(key) {
    this.setState({ defaultActiveKey: key });
  }

  render() {
    return (
      <div className="common-page-layout">
        <div className="title"> 区域管理 </div>
        <Tabs activeKey={this.state.defaultActiveKey} onChange={this.callback.bind(this)}>
          <TabPane tab="区域查询" key="1">
            <div className="search-bar">
              <span>关键字：</span>
              <Input onChange={this.changeInput.bind(this)} placeholder="请输入" />
              <Button type="primary" onClick={this.search.bind(this)}> 查询 </Button>
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
            <this.RegionForm></this.RegionForm>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Region;
