import React, { Component } from 'react';
import Collapsible from './Components/collapsible';

class App extends Component {
  render() {
    return (
      
      <div className="App">

<header className="@@header">
  <a className="@@link-to-index" href="index.html">
    <img className="@@logo__awesome" src="assets/images/logo-awesome-profile-cards.svg" alt="Logo Awesome Profile Cards" />
  </a>
</header>

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

  <Collapsible />

<footer className="footer">
  <div className="footer-container">
    <div className="copyright__container">
      <small className="copyright">Awesome profile-cards &copy2018</small>
      <img src="assets/images/free_horizontal_on_white_by_logaster.png" alt="" className="logo__image" />
    </div>

    <a href="https://adalab.es/" className="adalab-logo__link">
      <img src="assets/images/logo-adalab.png" alt="Logo de Adalab" className="adalab-logo__image" />
    </a>
  </div>
</footer>

  </div>

    );
  }
}

export default App;
