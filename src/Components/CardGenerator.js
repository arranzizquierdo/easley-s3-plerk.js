import React, { Component } from "react";
import Header from "./Header";
import CardPreview from "./CardPreview";
import CollapsiblesThree from "./collapsibles3";
import Footer from "./Footer";
import PropTypes from 'prop-types';

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
      handlerSendBackend,
      showTwitterContainer,
      openDesignCollapsible,
      openFillCollapsible,
      openShareCollapsible,
      toggleCollapsible,
      arrowDesignCollapsible,
      arrowFillCollapsible,
      arrowShareCollapsible,
      handleReset
    } = this.props;
    return (
      <React.Fragment>
        <Header />

        <main className="card-creator__main">

          <CardPreview
            nameCard={userInfo.name}
            jobCard={userInfo.job}
            skillsClass={userInfo.skills}
            phone={userInfo.phone}
            email={userInfo.email}
            linkedin={userInfo.linkedin}
            github={userInfo.github}
            colorClass={userInfo.palette}
            typographyClass={userInfo.typography.fontClass}
            srcimage={srcimage}
            handleReset={handleReset}
          />
          <CollapsiblesThree
            phone={userInfo.phone}
            email={userInfo.email}
            linkedin={userInfo.linkedin}
            github={userInfo.github}
            file={file}
            changeImage={changeImage}
            srcimage={srcimage}
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
            showTwitterContainer={showTwitterContainer}
            openDesignCollapsible={openDesignCollapsible}
            openFillCollapsible={openFillCollapsible}
            openShareCollapsible={openShareCollapsible}
            toggleCollapsible={toggleCollapsible}
            arrowDesignCollapsible={arrowDesignCollapsible}
            arrowFillCollapsible={arrowFillCollapsible}
            arrowShareCollapsible={arrowShareCollapsible}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

CardGenerator.propTypes = {
  userInfo: PropTypes.object,
  skills: PropTypes.arrayOf(PropTypes.string),
  changeInput: PropTypes.func,
  changeColor: PropTypes.func,
  changeTypography: PropTypes.func,
  skillsSelect: PropTypes.func,
  srcimage: PropTypes.string,
  file: PropTypes.object,
  changeImage: PropTypes.func,
  fakeclick: PropTypes.func,
  showUrl: PropTypes.string,
  loading: PropTypes.bool,
  handlerSendBackend: PropTypes.func,
  handleReset: PropTypes.func,
  arrowDesignCollapsible: PropTypes.string,
  arrowFillCollapsible: PropTypes.string,
  arrowShareCollapsible: PropTypes.string,
  openDesignCollapsible: PropTypes.bool,
  openFillCollapsible: PropTypes.bool,
  openShareCollapsible: PropTypes.bool,
}

export default CardGenerator;
