import React, { Component } from "react";


function NumberList(props) {
	const numbers = props.numbers
	const listItems = numbers.map(number => 
		<li key={number.toString()}>{number}</li>
	);
	return (
		<ul>{listItems}</ul>
	)
}

class ListAndKey extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const numbers = [1,2,3,4,5]
		return (
      <div>
        <NumberList numbers={numbers}></NumberList>
      </div>
    );
	}
}

export default ListAndKey;