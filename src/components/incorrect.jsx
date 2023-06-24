import React, { Component } from "react";

export class Incorrect extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};
	style = {
		listStyleType: "none"
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				<p className="result">Command "{this.props.line.type}" not found</p>
			</React.Fragment>
		);
	}
}

export class Missing extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};
	style = {
		listStyleType: "none"
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				<p className="result">
                    Command "{this.props.line.type}" requires 1 parameter<br></br> - cat [filename.txt]
                </p>
			</React.Fragment>
		);
	}
}

export class Param extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};
	style = {
		listStyleType: "none"
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				<p className="result">Command "{this.props.line.type}" does not require parameters</p>
			</React.Fragment>
		);
	}
}

export default {Incorrect, Param, Missing};

