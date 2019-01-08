import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">

        <section class="container__cardview">
        <div className="container__buttom">
      <button class="buttom__reset" type="button"><i class="icon__trash far fa-trash-alt icon__trash"></i>Reset</button>
    </div>

  <div className="preview__card">
    <div className="rectangle__decoration"></div>
    <div className="name__container">
      <p className="name">Nombre Apellido</p>
      <p className="profession">Front-end developer</p>
    </div>

    <img className="photo__user" src="assets/images/default.jpeg" alt="User photo" />
    <ul className="social__media-list">
      
      <li className="social__media-buttom">
        <a className="icon__number icon__item" href="">
          <i className="fas fa-mobile-alt">
          </i></a>
      </li>
      
      <li className="social__media-buttom">
        <a className="icon__mail icon__item" href="">
          <i className="far fa-envelope">
          </i></a>
      </li>
      
      <li className="social__media-buttom">
        <a className="icon__linkedin icon__item" href="">
          <i className="fab fa-linkedin-in">
          </i></a>
      </li>
      
      <li className="social__media-buttom">
        <a className="icon__github icon__item" href="">
          <i className="fab fa-github-alt">
          </i></a>
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
  </div>

    );
  }
}

export default App;
