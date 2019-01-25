import React, { Component } from 'react';
import logoAdalab from '../Images/logo-adalab.png';


class Footer extends Component {
    render () {
        return (
<footer className="footer">
  <div className="footer-container">
    <div className="copyright__container">
      <small className="copyright">Awesome profile-cards &copy2018</small>
      <img src="assets/images/free_horizontal_on_white_by_logaster.png" alt="" className="logo__image" />
    </div>

    <a href="https://adalab.es/" className="adalab-logo__link">
      <img src= {logoAdalab} alt="Logo de Adalab" className="adalab-logo__image" />
    </a>
  </div>
</footer>

        )
    }
}

export default Footer;
