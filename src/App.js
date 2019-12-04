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
        </div>
      </div>
    );
  }
}

export default App;
