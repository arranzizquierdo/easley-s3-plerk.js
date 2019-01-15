<<<<<<< HEAD
import React, { Component } from "react";
import ImageDefault from "../Images/default.jpeg";
=======
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
>>>>>>> a4776375dd78b63cda837207a4c0fb467c32bf20

class CardPreview extends Component {
  render() {
    return (
<<<<<<< HEAD
      <section className="container__cardview">
        <div className="container__buttom">
          <button className="buttom__reset" type="button">
            <i className="icon__trash far fa-trash-alt icon__trash" />
            Reset
          </button>
        </div>

        <div className="preview__card">
          <div className="rectangle__decoration" />
=======

      <section className="container__cardview">
        <div className="container__buttom">
          <button className="buttom__reset" type="button"><i className="icon__trash far fa-trash-alt icon__trash"></i>Reset</button>
        </div>

        <div className="preview__card">
          <div className="rectangle__decoration"></div>
>>>>>>> a4776375dd78b63cda837207a4c0fb467c32bf20
          <div className="name__container">
            <p className="name">Nombre Apellido</p>
            <p className="profession">Front-end developer</p>
          </div>

          <img className="photo__user" src={ImageDefault} alt="User photo" />

<<<<<<< HEAD
          <ul className="social__media-list">
            <li className="social__media-buttom">
              <a className="icon__number icon__item" href="">
                <i className="fas fa-mobile-alt" />
              </a>
            </li>

            <li className="social__media-buttom">
              <a className="icon__mail icon__item" href="">
                <i className="far fa-envelope" />
              </a>
            </li>

            <li className="social__media-buttom">
              <a className="icon__linkedin icon__item" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>

            <li className="social__media-buttom">
              <a className="icon__github icon__item" href="">
                <i className="fab fa-github-alt" />
              </a>
            </li>
          </ul>

          <div className="rectangle__decoration-large" />
=======
          <SocialLinkList itemsArr= {items} />
          
          <div className="rectangle__decoration-large"></div>
>>>>>>> a4776375dd78b63cda837207a4c0fb467c32bf20
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

<<<<<<< HEAD
export default CardPreview;
=======
    )
  }
};

export default CardPreview;
>>>>>>> a4776375dd78b63cda837207a4c0fb467c32bf20
