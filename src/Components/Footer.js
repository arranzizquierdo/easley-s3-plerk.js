import React, { Component } from 'react';
import logoAdalab from '../Images/logo-adalab.png';
import logoPlerk from '../Images/plerkjs-logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="copyright__container">
            <small className="copyright">Awesome profile-cards &copy2018</small>
          </div>
          <div className="container__logos">
          <a href="https://github.com/Adalab/easley-s3-plerk.js" className="adalab-logo__link plerk-link">
            <img src={logoPlerk} alt="Logo Plerk" className="adalab-logo__image plerk-logo" />
          </a>
          <a href="https://adalab.es/" className="adalab-logo__link">
            <img src={logoAdalab} alt="Logo de Adalab" className="adalab-logo__image" />
          </a>
          </div>
          
      </footer>
    )
  }
}

export default Footer;
