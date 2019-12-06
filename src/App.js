import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return `${user.firstName} ${user.LastName}`;
}
const user = {
  firstName: "Lufang",
  LastName: "Fan"
};
const element = <h2>Hello {formatName(user)}</h2>;

function Welcome(props) {
return <h2>Hello, {props.name}</h2>
}

function Avatar(props) {
	return (
		<img className="avatar" src={props.user.avatarUrl} alt={props.user.name}/>
	)
}
function UserInfo(props) {
	return (
		<div className="user-info">
			<Avatar user={props.user} />
			<div className="user-info-name">{props.user.name}</div>
		</div>
	)
}

function Comment(props) {
	return (
    <div className="comment">
     		<UserInfo user={props.author} />
        <div className="comment-text">{props.text}</div>
        <div className="comment-date">{props.date}</div>
    </div>
  );
}
const author = {
  name: "flf",
  avatarUrl: "./logo.svg"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {element}
          <Welcome name="Sara" />
          <Welcome name="gsm" />
          <Welcome name="flf" />
          <Comment author={author} text="age"/>
        </div>
      </div>
    );
  }
}

export default App;
