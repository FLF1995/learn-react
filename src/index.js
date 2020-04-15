import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router";
import './index.css';
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>,
  document.getElementById("root")
);
