import React, { Component } from "react";
import { Cascader } from "antd";
import { getArea } from "../api/user/region";

class RegionCascader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaOptions: [],
		};
  }

  //获取省市区级联数据
  getAreaData(code, level, targetOption) {
    const params = { code: code };
    getArea(params).then((res) => {
      switch (level) {
        case 1:
          const areaOptions = res.data.data.map((item) => {
            return {
              value: item.code,
              label: item.name,
              isLeaf: false,
            };
          });
          this.setState({ areaOptions: areaOptions });
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
          this.setState({ areaOptions: [...this.state.areaOptions] });
          break;
        case 3:
          targetOption.loading = false;
          targetOption.children = res.data.data.map((item) => {
            return {
              value: item.code,
              label: item.name,
              isLeaf: true,
            };
          });
          this.setState({
            areaOptions: [...this.state.areaOptions],
          });
        default:
          break;
      }
    });
  }

  loadAreaData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    if (selectedOptions.length == 1) {
      this.getAreaData(selectedOptions[0].value, 2, targetOption);
    } else if (selectedOptions.length == 2) {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      this.getAreaData(selectedOptions[1].value, 3, targetOption);
    }
  };

  onChange(values) {
		console.log("values", values);
    this.props.parent.getRegionValues(this, values);
  }

  componentDidMount() {
    this.getAreaData(10000000, 1);
  }

  render() {
    return (
			<Cascader
				options={this.state.areaOptions}
				loadData={this.loadAreaData}
				onChange={this.onChange.bind(this)}
			/>
    );
  }
}

export default RegionCascader;
