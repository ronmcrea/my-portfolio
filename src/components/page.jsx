import React, { Component } from "react";
import NewLine from "./newLine";
import Ls from "./ls";
import Cat from "./cat";
import banner from "../assets/banner.png"
import banner1 from '../assets/banner1.png'
import { Incorrect, Param, Missing } from "./incorrect";
export class Page extends Component {
	state = {
		numberOfLine: 0,
		displayEverything: [{ value: "", id: 0, displayInput: true, type: "line" }]
	};
	information = {
		name: "Ronald Daniel",
		commands: [
			{
				id: 10,
				type: "ls"
			},
			{
				id: 11,
				type: "cat"
			},
			{
				id: 12,
				type: "clear"
			},
			{
				id: 13,
				type: "help"
			}
		],
		subDir: [
			{
				id: 14,
				type: "About.txt"
			},
			{
				id: 15,
				type: "Education.txt"
			},
			{
				id: 16,
				type: "Projects.txt"
			},
			{
				id: 17,
				type: "Socials.txt"
			}
		]
	};
	render() {
		return (
			<div className="container">
				<div className="terminal">
					<div className="heading">
					<img src={banner} width="80%"></img>
					<img src={banner1} width="100%"></img>
					{/* <p className="banner">

						██████╗░░█████╗░███╗░░██╗░█████╗░██╗░░░░░██████╗░  ██████╗░░█████╗░███╗░░██╗██╗███████╗██╗░░░░░<br></br>
						██╔══██╗██╔══██╗████╗░██║██╔══██╗██║░░░░░██╔══██╗  ██╔══██╗██╔══██╗████╗░██║██║██╔════╝██║░░░░░<br></br>
						██████╔╝██║░░██║██╔██╗██║███████║██║░░░░░██║░░██║  ██║░░██║███████║██╔██╗██║██║█████╗░░██║░░░░░<br></br>
						██╔══██╗██║░░██║██║╚████║██╔══██║██║░░░░░██║░░██║  ██║░░██║██╔══██║██║╚████║██║██╔══╝░░██║░░░░░<br></br>
						██║░░██║╚█████╔╝██║░╚███║██║░░██║███████╗██████╔╝  ██████╔╝██║░░██║██║░╚███║██║███████╗███████╗<br></br>
						╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝╚═════╝░  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚══════╝<br></br>
						<br></br>
						<br></br>
					</p> */}
					{/* <p className="banner">

██████╗░███████╗██████╗░░██████╗░█████╗░███╗░░██╗░█████╗░██╗░░░░░██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░<br />
██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗████╗░██║██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗<br />
██████╔╝█████╗░░██████╔╝╚█████╗░██║░░██║██╔██╗██║███████║██║░░░░░██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║<br />
██╔═══╝░██╔══╝░░██╔══██╗░╚═══██╗██║░░██║██║╚████║██╔══██║██║░░░░░██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║<br />
██║░░░░░███████╗██║░░██║██████╔╝╚█████╔╝██║░╚███║██║░░██║███████╗██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝<br />
╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░<br />
					</p> */}
					</div>
					<p className="prompt">
						Hey there! I am a Web Developer.
						For basic commands type help
					</p>

					{this.state.displayEverything.map(l => {
						if (l.type === "line") {
							return (
								<NewLine
									key={l.id}
									handelWhatever={this.handelWhatever}
									line={l}
									displayInput={l.displayInput}
								></NewLine>
							);
						} else if (l.type === "ls") {
							if (l.value.split(" ")[1]) {
								return (
									<Param key={l.id} line={l} subDir={this.information.subDir}></Param>
								);
							}
							else {
								return (
									<Ls key={l.id} line={l} subDir={this.information.subDir}></Ls>
								);
							}
						} else if (l.type === "help") {
							if (l.value.split(" ")[1]) {
								return (
									<Param key={l.id} line={l} subDir={this.information.subDir}></Param>
								);
							}
							else {
								return (
									<Ls key={l.id} line={l} subDir={this.information.commands}></Ls>
								);
							}

						} else if (l.type === "cat") {
							if (l.value.split(" ")[1] && !l.value.split(" ")[2]) {
								return <Cat key={l.id} line={l}></Cat>;
							}
							else {
								return (
									<Missing key={l.id} line={l} subDir={this.information.subDir}></Missing>
								);
							}
						}
						else {
							return <Incorrect key={l.id} line={l}></Incorrect>;
						}
					})}
				</div>
			</div>
		);
	}

	handelWhatever = (string_value, Tid) => {
		let res = string_value.split(" ");

		if (res[0] === "clear") {
			if (res[1]) {
				return (
					<React.Fragment>
						<p className="prompt">{res}</p>
						<p className="result">Command "clear" does not require parameters</p>
					</React.Fragment>
				);
			}
			else {
				this.setState({
					numberOfLine: 0,
					displayEverything: [
						{ value: "", id: 0, displayInput: true, type: "line" }
					]
				});
			}
		} else {
			this.setState(
				{
					displayEverything: [
						...this.state.displayEverything.filter(l => l.id !== Tid),
						//...{ value: string_value, id: Tid, displayInput: false , type: "line"}
						{
							...this.state.displayEverything.find(l => l.id === Tid),
							value: string_value,
							type: res[0]
						}
					]
				},
				() => this.handleClick()
			);
		}
	};

	// Adding a new line after a click
	handleClick = event => {
		const num = this.state.displayEverything.length + 1;
		this.setState({
			numberOfLine: this.state.numberOfLine + 1,
			displayEverything: [
				...this.state.displayEverything,
				{ value: "", id: num, displayInput: true, type: "line" }
			]
		});
	};
}

export default Page;
