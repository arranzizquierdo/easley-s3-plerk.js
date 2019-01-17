import React, { Component } from 'react';
import ImageDefault from '../Images/default.jpeg';
import SocialLinkList from './SocialLinkList';


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
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    const linkedin = this.props.linkedin
    const github = this.props.github
    const phone = this.props.phone
    const email = this.props.email

    console.log ('cardpreview', linkedin)
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

          <SocialLinkList 
          itemsArr= {items}
          linkedin= {linkedin}
          github= {github}
          phone= {phone}
          email= {email}
          colorClass={this.props.colorClass}
          />
          
          <div className="rectangle__decoration-large"></div>
          <ul className="skill__tags">
            <li className={`first_tag tag ${this.props.colorClass.medium }`}>HTML</li>
            <li className={`second_tag tag ${this.props.colorClass.medium }`}>CSS</li>
            <li className={`third_tag tag ${this.props.colorClass.medium }`}>GULP</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CardPreview;
