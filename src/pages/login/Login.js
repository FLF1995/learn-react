import React, { Component } from "react";
import "./login.scss";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err,values)=>{
			if(!err) {
				console.log("values", values);
			}
		})
	}
  render() {
		console.log("this.props", this.props.form);
		const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div className="login-title">旅游大数据中心</div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {rulrs:[{required: true, message:"请输入用户名"}]})}
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="密码"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button className="login-btn" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
			
    );
  }
}
const LoginForm = Form.create({ name: "normal_login" })(Login);

export default LoginForm;