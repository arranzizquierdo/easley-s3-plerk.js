import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "./collapsible";
import DesignContent from "./DesignContent";
import InputSkill from "./InputSkill";
import DefaultImage from "../Images/default.jpeg";
import Loading from "./Loading";
import ShareTwitter from "./ShareTwitter";

class CollapsiblesThree extends Component {

  handleCheckedSkills(skill) {
    console.log(this.props);
    return this.props.userInfo.skills.includes(skill) ? true : false;
  }

  render() {
    const { 
        skills, 
        toggleCollapsible, 
        handlerSendBackend,
        arrowDesignCollapsible,
        arrowFillCollapsible,
        arrowShareCollapsible,
        openDesignCollapsible,
        openFillCollapsible,
        openShareCollapsible} = this.props;
    const skillsSelect = this.props.skillsSelect;
    return (
      <div>
        <Collapsible
          title="DISEÑA"
          icon="far fa-object-ungroup"
          arrowIcon={arrowDesignCollapsible}
          collapsible={openDesignCollapsible}
          toggleCollapsible={toggleCollapsible}
        >
          <DesignContent {...this.props} />
        </Collapsible>
        <Collapsible
          title="RELLENA"
          icon="far fa-keyboard"
          arrowIcon={arrowFillCollapsible}
          collapsible={openFillCollapsible}
          skills={skills}
          toggleCollapsible={toggleCollapsible}

        >
          <div>
            <label className="fill_subtitle" htmlFor="firstName">
              Nombre completo
            </label>
            <input
              onChange={this.props.changeInput}
              className="input_box full__name"
              value={this.props.nameCardInput}
              id="firstName"
              placeholder="Ej: Sally Jill"
              type="text"
              name="name"
            />
            <label className="fill_subtitle" htmlFor="position">
              Puesto
            </label>
            <input
              onChange={this.props.changeInput}
              className="input_box profession__input"
              id="position"
              placeholder="Ej: Front-end unicorn"
              value={this.props.jobCardInput}
              type="text"
              name="job"
            />
            <label className="fill_subtitle" htmlFor="profileImage">
              Imagen de perfil
            </label>
            <div className="container_add-image">
              <input
                type="button"
                onClick={this.props.fakeclick}
                className="button_add-image"
                value="Añadir imagen"
              />
              <input
                className="action__hiddenField"
                ref={this.props.file}
                type="file"
                onChange={this.props.changeImage}
              />
              <div className="container_image-preview">
                <img
                  src={
                    this.props.srcimage === ""
                      ? DefaultImage
                      : this.props.srcimage
                  }
                  alt="user"
                  className="image-preview"
                />
              </div>
            </div>
            <label className="fill_subtitle" htmlFor="mail">
              Email
            </label>
            <input
              value={this.props.email}
              onChange={this.props.changeInput}
              name="email"
              className="input_box email__input"
              id="mail"
              placeholder="Ej: Sally-hill@gmail.com"
              type="email"
            />
            <label className="fill_subtitle" htmlFor="phone">
              Teléfono
            </label>
            <input
              value={this.props.phone}
              onChange={this.props.changeInput}
              name="phone"
              className="input_box phone__input"
              id="phone"
              placeholder="Ej: 555-55-55-55"
              type="tel"
            />
            <label className="fill_subtitle" htmlFor="linkedin">
              Linkedin
            </label>
            <input
              value={this.props.linkedin}
              onChange={this.props.changeInput}
              name="linkedin"
              className="input_box linkedin__input"
              id="linkedin"
              placeholder="Ej: sally.hill"
              type="text"
            />
            <label className="fill_subtitle" htmlFor="github">
              Github
            </label>
            <input
              value={this.props.github}
              onChange={this.props.changeInput}
              name="github"
              className="input_box github__input"
              id="github"
              placeholder="Ej: sally-hill"
              type="text"
            />
            <h3 className="fill_subtitle fill_subtitle--skills">
              Habilidades (máximo 3)
            </h3>
            <div className="container_skills" skills={skills}>
              {skills.map((skill, i) => {
                return (
                  <InputSkill
                    key={i}
                    skill={skill}
                    skillsSelect={skillsSelect}
                    checked={this.handleCheckedSkills(skill)}
                  />
                );
              })}
            </div>
          </div>
        </Collapsible>
        <Collapsible
          title="COMPARTE"
          icon="fas fa-share-alt"
          arrowIcon={arrowShareCollapsible}
          collapsible={openShareCollapsible}
          handlerSendBackend={handlerSendBackend}
          toggleCollapsible={toggleCollapsible}
        >
          <div
            className={
              this.props.showTwitterContainer === false
                ? "twitter_mother hidden"
                : "twitter_mother"
            }
          >
            <div className="twitter_container">
              {this.props.loading === true ? (
                <Loading />
              ) : (
                <ShareTwitter showUrl={this.props.showUrl} />
              )}
            </div>
          </div>
        </Collapsible>
      </div>
    );
  }
}

CollapsiblesThree.propTypes = {
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    file: PropTypes.func.isRequired,
    changeImage: PropTypes.func.isRequired,
    srcimage: PropTypes.string.isRequired,
    fakeclick: PropTypes.func.isRequired,
    changeInput: PropTypes.func.isRequired,
    changeColor: PropTypes.func.isRequired,
    changeTypography: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    nameCardInput: PropTypes.string.isRequired,
    jobCardInput: PropTypes.string.isRequired,
    skillsSelect: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
    showUrl: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    handlerSendBackend: PropTypes.func.isRequired,
    showTwitterContainer: PropTypes.bool.isRequired,
    openDesignCollapsible:PropTypes.bool.isRequired,
    openFillCollapsible:PropTypes.bool.isRequired,
    openShareCollapsible: PropTypes.bool.isRequired,
    toggleCollapsible: PropTypes.func.isRequired,
    arrowDesignCollapsible:PropTypes.string.isRequired,
    arrowFillCollapsible: PropTypes.string.isRequired,
    arrowShareCollapsible: PropTypes.string.isRequired,
  };

export default CollapsiblesThree;
