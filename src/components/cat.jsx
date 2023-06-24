import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"I am a computer engineering student specializing in web development, server management, and networking. With a solid foundation in these areas, I possess a strong understanding of web technologies, proficient server administration skills, and a comprehensive grasp of network architecture.",
		education:
			"Quis ut voluptate irure est. Ex in velit nisi nostrud occaecat ipsum non quis ea. Ipsum deserunt est amet adipisicing sint nulla quis nostrud. Ullamco enim do incididunt amet elit qui sint excepteur sit irure elit reprehenderit qui excepteur. Laborum ea minim aliquip et laboris aliquip reprehenderit sunt cupidatat pariatur esse do. In sint magna laborum culpa officia cillum ex velit commodo. Laborum adipisicing laboris incididunt nulla aliquip.",
		projects: [
			{
				projectName: "Github",
				linkToGithub: "https://github.com/ronmcrea?tab=repositories"
			}
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/ronmcrea"
			},

			{
				platform: "LinkedIn",
				link: "https://www.linkedin.com/in/ronald-c-daniel/"
			},

			{
				platform: "Twitter",
				link: "https://twitter.com/ron_mcrea"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			if (navigation === "About.txt") {
				return <p className="result">{this.information.about}</p>;
			} else if (navigation === "Education.txt") {
				return <p className="result">
					<ul>
					<li className="Edu">Bachelor's Degree in Computer Engineering, Karunya University, 2024 </li>
					<li className="Edu">Relevant Domains: Web Development, Server Management, Networking </li>
					<li className="Edu">Academic achievements: [Include any notable achievements or honors, such as Dean's List, scholarships, or research projects] </li>
					</ul>
				</p>;
			}
			else if (navigation === "Projects.txt") {
				return (
					<React.Fragment>
						<ul>
							{this.information.projects.map(everyProject => {
								return (
									<li>
										<p className="result">
											<a href={everyProject.linkToGithub} target="_blank">
												{everyProject.projectName}
												<img src={githubLogo} alt="GithubLink to Code" />
											</a>
										</p>
									</li>
								);
							})}
						</ul>
					</React.Fragment>
				);
			} else if (navigation === "Socials.txt") {
				return (
					<React.Fragment>
						<ul>
							{this.information.social.map(everySocial => {
								return (
									<li>
										<p className="result">
											<a href={everySocial.link} target="_blank">
												{everySocial.platform}
											</a>
										</p>
									</li>
								);
							})}
						</ul>
					</React.Fragment>
				);
			} else {
				return <p className="result">"{navigation}" not found!</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;
