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
    return (this.props.userInfo.skills.includes(skill))
      ? true
      : false
  }

  handleDisabledSkills(skill) {
    const skillsArrUserInfo = this.props.userInfo.skills;
    if (skillsArrUserInfo.length >= 3) {
      if (skillsArrUserInfo.includes(skill)) {
        return false
      } else {
        return true
      }
    }
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
      openShareCollapsible,
      changeInput,
      nameCardInput,
      jobCardInput,
      fakeclick,
      file,
      changeImage,
      srcimage,
      email,
      phone,
      linkedin,
      github,
      showTwitterContainer,
      showUrl,
      loading,
      skillsSelect
    } = this.props;

    return (
      <div className="custom-section">
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
              onChange={changeInput}
              className="input_box full__name"
              value={nameCardInput}
              id="firstName"
              placeholder="Ej: Sally Jill"
              type="text"
              name="name"
            />
            <label className="fill_subtitle" htmlFor="position">
              Puesto
            </label>
            <input
              onChange={changeInput}
              className="input_box profession__input"
              id="position"
              placeholder="Ej: Front-end unicorn"
              value={jobCardInput}
              type="text"
              name="job"
            />
            <label className="fill_subtitle" htmlFor="profileImage">
              Imagen de perfil
            </label>
            <div className="container_add-image">
              <input
                type="button"
                onClick={fakeclick}
                className="button_add-image"
                value="Añadir imagen"
              />
              <input
                className="action__hiddenField"
                ref={file}
                type="file"
                onChange={changeImage}
              />
              <div className="container_image-preview">
                <img
                  src={
                    srcimage === ""
                      ? DefaultImage
                      : srcimage
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
              value={email}
              onChange={changeInput}
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
              value={phone}
              onChange={changeInput}
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
              value={linkedin}
              onChange={changeInput}
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
              value={github}
              onChange={changeInput}
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
                    disabled={this.handleDisabledSkills(skill)}
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
              showTwitterContainer === false
                ? "twitter_mother hidden"
                : "twitter_mother"
            }
          >
            <div className="twitter_container">
              {loading === true ? (
                <Loading />
              ) : (
                  <ShareTwitter showUrl={showUrl} />
                )}
            </div>
          </div>
        </Collapsible>
      </div>
    );
  }
}

CollapsiblesThree.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  file: PropTypes.object,
  changeImage: PropTypes.func,
  srcimage: PropTypes.string,
  fakeclick: PropTypes.func,
  changeInput: PropTypes.func,
  changeColor: PropTypes.func,
  changeTypography: PropTypes.func,
  skills: PropTypes.arrayOf(PropTypes.string),
  nameCardInput: PropTypes.string,
  jobCardInput: PropTypes.string,
  skillsSelect: PropTypes.func,
  userInfo: PropTypes.object,
  showUrl: PropTypes.string,
  loading: PropTypes.bool,
  handlerSendBackend: PropTypes.func,
  showTwitterContainer: PropTypes.bool,
  openDesignCollapsible: PropTypes.bool,
  openFillCollapsible: PropTypes.bool,
  openShareCollapsible: PropTypes.bool,
  toggleCollapsible: PropTypes.func,
  arrowDesignCollapsible: PropTypes.string,
  arrowFillCollapsible: PropTypes.string,
  arrowShareCollapsible: PropTypes.string
};

export default CollapsiblesThree;
