import React, { Component } from 'react';
import ImageDefault from '../Images/default.jpeg';
import SocialLinkList from './SocialLinkList';
import PropTypes from 'prop-types';


const items = [
  {
    id: "phone",
    itemIcon: "fas fa-mobile-alt",
    link: 'tel:'
  },
  {
    id: "email",
    itemIcon: "far fa-envelope",
    link: 'mailto:'
  },
  {
    id: "linkedin",
    itemIcon: "fab fa-linkedin-in",
    link: 'https://linkedin.com/in/'
  },
  {
    id: "github",
    itemIcon: "fab fa-github-alt",
    link: 'https://github.com/'
  }
]

class CardPreview extends Component {

  paintName(){
    return this.props.nameCard || "Nombre y Apellidos";
  }

  paintJob(){
    return this.props.jobCard || "Front-end developer";
  }

  render() {

    const { 
      linkedin, 
      github, 
      phone, 
      email, 
      colorClass,
      typographyClass, 
      srcimage,
      skillsClass,
      handleReset 
    } = this.props;

    return (
      <section className="container__cardview">
        <div className="container__buttom">
          <button onClick={handleReset} className="buttom__reset" type="button">
            <i className="icon__trash far fa-trash-alt icon__trash" />
            Reset
          </button>
        </div>

        <div className="preview__card">
          <div className={`rectangle__decoration ${colorClass.medium }`} />
          <div className="name__container">
            <p className={`name ${typographyClass} ${colorClass.dark }`}>{this.paintName()}</p>
            <p className={`profession ${typographyClass}`}>{this.paintJob()}</p>
          </div>

          <img className="photo__user" src={(srcimage === "")? ImageDefault : srcimage} alt="User" />
    
          <SocialLinkList 
          itemsArr= {items}
          linkedin= {linkedin}
          github= {github}
          phone= {phone}
          email= {email}
          colorClass={colorClass}
          />
          
          <div className="rectangle__decoration-large"></div>
          <ul className="skill__tags" skillsClass={skillsClass}>
            {skillsClass.map((skill, i) => {
              return <li className={`first_tag tag ${colorClass.medium }`} key={i}>{skill}</li>
            })}
          </ul>
        </div>
      </section>
    );
  }
}

CardPreview.propTypes = {
  nameCard: PropTypes.string,
  jobCard: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
}

export default CardPreview;
