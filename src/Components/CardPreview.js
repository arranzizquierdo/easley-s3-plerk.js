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
          <div className="rectangle__decoration" />
          <div className="name__container">
            <p className="name">Nombre Apellido</p>
            <p className="profession">Front-end developer</p>
          </div>

          <img className="photo__user" src={ImageDefault} alt="User photo" />

          <SocialLinkList itemsArr= {items} />
          
          <div className="rectangle__decoration-large"></div>
          <ul className="skill__tags">
            <li className="first_tag tag">HTML</li>
            <li className="second_tag tag">CSS</li>
            <li className="third_tag tag">GULP</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CardPreview;
