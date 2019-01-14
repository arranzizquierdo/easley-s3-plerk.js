import React, { Component } from "react";
import ImageDefault from "../Images/default.jpeg";

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
