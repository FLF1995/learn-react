import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from "./Clock";
import './index.css';

ReactDOM.render(
	<div>
		<App />
		<Clock />
	</div>,
  document.getElementById('root')
);
