import React, { Component } from 'react';
import LogoAwesome from '../Images/logo-awesome.svg';


class Header extends Component {
    render () {
        return (
            <header className="header__card-creator">
                <a className="@@link-to-index" href="https://adalab.es/">
                <img className="logo__card-creator" src={LogoAwesome} alt="Logo Awesome Profile Cards" />
                </a>
            </header>
        );
    }
}

export default Header;