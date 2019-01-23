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
			changeInput,
			changeColor,
			changeTypography,
			skillsSelect,
			srcimage,
			file,
			changeImage,
			fakeclick,
			showUrl,
			loading,
			handlerSendBackend
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
					srcimage={srcimage}
				/>
				<CollapsiblesThree
					phone={userInfo.phone}
					email={userInfo.email}
					linkedin={userInfo.linkedin}
					github={userInfo.github}
					file={file}
					changeImage={changeImage}
					srcimage = {srcimage}
					fakeclick={fakeclick}
					changeInput={changeInput}
					changeColor={changeColor}
					changeTypography={changeTypography}
					skills={skills}
					nameCardInput={userInfo.name}
					jobCardInput={userInfo.job}
					skillsSelect={skillsSelect}
					userInfo={userInfo}
					showUrl={showUrl}
					loading={loading}
					handlerSendBackend={handlerSendBackend}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}

export default CardGenerator;
