import React, { Component } from "react";

export class NewLine extends Component {
	state = {
		id: this.props.line.id,
		value: this.props.line.value,
		displayInput: this.props.line.displayInput
	};

	focusInput = component => {
		if (component) {
			component.focus();
		}
	};

	files = ["About.txt", "Education.txt", "Projects.txt", "Socials.txt"];

	render() {
		return (
			<React.Fragment>
				<p className={this.badgeChange()}>
					{this.props.displayInput && (
						<input
							type="text"
							className="here"
							ref={this.focusInput}
							value={this.state.value}
							onChange={this.handleChange}
							onKeyDown={this.handelEnter}
							autoFocus
						/>
					)}
					{this.state.value}
				</p>
			</React.Fragment>
		);
	}

	handleChange = event => {
		this.setState({ value: event.target.value });

		// console.log(event.target.value);
	};

	handelEnter = event => {
		if (event.key === "Enter") {
			this.props.handelWhatever(event.target.value, this.state.id);
		}
		if (event.key === "Tab") {
			if(event.target.value.split(" ")[0] === "cat"){
				var text = event.target.value
				var count = text.split(" ")[1].length
				if(count === 0){
					console.log("May the force be with you!!!");
				}
				else{
					for(var i=0; i<5; i++){
						if(text.split(" ")[1] === this.files[i].substring(0, count)){
							var cmd = text.split(" ")[0];
							var file = text.split(" ")[1];
							file = this.files[i];
							text = cmd + " " + file;
							break;
						}
					}
				}
				this.setState({ value: text })
			}
			event.preventDefault();
		}
	};

	badgeChange() {
		let badge = "prompt ";
		badge += this.props.displayInput ? "output new-output" : "";
		return badge;
	}
}

export default NewLine;
