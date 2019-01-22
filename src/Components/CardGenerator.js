import React, { Component } from "react";
import Header from "./Header";
import CardPreview from "./CardPreview";
import CollapsiblesThree from "./collapsibles3";
import Footer from './Footer';

class CardGenerator extends Component {
	render() {
		const {
			userInfo,
			skills,
			handleChangeInput,
			handleColorChange,
			handleTypographyChange,
			handleSkillsSelect
		} = this.props;
		return (
			<React.Fragment>
				<Header />

				<CardPreview
					nameCard={userInfo.name}
					jobCard={userInfo.job}
					skillsClass={userInfo.skills}
					phone={userInfo.phone}
					email={userInfo.email}
					linkedin={userInfo.linkedin}
					github={userInfo.github}
					colorClass={userInfo.palette}
					typographyClass={userInfo.typography}
				/>
				<CollapsiblesThree
					phone={userInfo.phone}
					email={userInfo.email}
					linkedin={userInfo.linkedin}
					github={userInfo.github}
					changeInput={handleChangeInput}
					changeColor={handleColorChange}
					changeTypography={handleTypographyChange}
					skills={skills}
					nameCardInput={userInfo.name}
					jobCardInput={userInfo.job}
					skillsSelect={handleSkillsSelect}
					userInfo={userInfo}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}

export default CardGenerator;
