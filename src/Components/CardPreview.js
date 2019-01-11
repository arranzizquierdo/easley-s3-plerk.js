import React, { Component } from 'react';
import ImageDefault from '../Images/default.jpeg';
import SocialLink from './SocialLink';

class CardPreview extends Component {
  render() {
    return (

      <section className="container__cardview">
        <div className="container__buttom">
          <button className="buttom__reset" type="button"><i className="icon__trash far fa-trash-alt icon__trash"></i>Reset</button>
        </div>

        <div className="preview__card">
          <div className="rectangle__decoration"></div>
          <div className="name__container">
            <p className="name">Nombre Apellido</p>
            <p className="profession">Front-end developer</p>
          </div>

          <img className="photo__user" src={ImageDefault} alt="User photo" />

          <ul className="social__media-list">
          <li className="social__media-buttom">
              <SocialLink 
                itemIcon="fas fa-mobile-alt"
              />
            </li>
            <li className="social__media-buttom">
              <SocialLink 
                itemIcon="far fa-envelope"
              />
            </li>
            <li className="social__media-buttom">
              <SocialLink 
                itemIcon="fab fa-linkedin-in"
              />
            </li>
            <li className="social__media-buttom">
              <SocialLink 
                itemIcon="fab fa-github-alt"
              />
            </li>
          </ul>

          <div className="rectangle__decoration-large"></div>
          <ul className="skill__tags">
            <li className="first_tag tag">HTML</li>
            <li className="second_tag tag">CSS</li>
            <li className="third_tag tag">GULP</li>
          </ul>
        </div>
      </section>

    )
  }
};

export default CardPreview;