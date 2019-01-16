import React, { Component } from 'react';
import ImageDefault from '../Images/default.jpeg';
import SocialLinkList from './SocialLinkList';


const items = [
  {
    id: "mobile",
    itemIcon: "fas fa-mobile-alt"
  },
  {
    id: "email",
    itemIcon: "far fa-envelope"
  },
  {
    id: "linkedin",
    itemIcon: "fab fa-linkedin-in"
  },
  {
    id: "gitHub",
    itemIcon: "fab fa-github-alt"
  }
]

class CardPreview extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <section className="container__cardview">
        <div className="container__buttom">
          <button className="buttom__reset" type="button">
            <i className="icon__trash far fa-trash-alt icon__trash" />
            Reset
          </button>
        </div>

        <div className="preview__card">
          <div className={`rectangle__decoration ${this.props.colorClass.medium }`} />
          <div className="name__container">
            <p className={`name ${this.props.typographyClass} ${this.props.colorClass.dark }`}>Nombre Apellido</p>
            <p className={`profession ${this.props.typographyClass}`}>Front-end developer</p>
          </div>

          <img className="photo__user" src={ImageDefault} alt="User photo" />

          <SocialLinkList itemsArr={items} colorClass={this.props.colorClass} />
          
          <div className="rectangle__decoration-large"></div>
          <ul className="skill__tags" skillsClass={this.props.skillsClass}>
            {this.props.skillsClass.map((skill, i) => {
              return <li className={`first_tag tag ${this.props.colorClass.medium }`} key={i}>{skill}</li>
            })}
            {/* <li className={`first_tag tag ${this.props.colorClass.medium }`}>HTML</li>
            <li className={`second_tag tag ${this.props.colorClass.medium }`}>CSS</li>
            <li className={`third_tag tag ${this.props.colorClass.medium }`}>GULP</li>   */}
          </ul>
        </div>
      </section>
    );
  }
}

export default CardPreview;
