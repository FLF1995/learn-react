import React, { Component } from "react";
import { Select, Input, Button, Tag, message, Form } from "antd";

const layout = {
	labelCol: { span: 2},
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

class AddOrEditCustomer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderForm = () => {
		const onFinish = values => {
			console.log('Success:', values);
		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		return (
			<Form {...layout} name="basic" onFinish={onFinish} 	onFinishFailed={onFinishFailed}>
				<Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
        </Button>
				</Form.Item>
			</Form>
		);
	};

	render() {
		return (
			<div className="common-page-layout customer">
				{this.renderForm()}
			</div>
		);
	}

	componentDidMount() {
		
	}
}

export default AddOrEditCustomer;