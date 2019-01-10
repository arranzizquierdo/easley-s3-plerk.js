import React, { Component } from 'react';
import LogoAwesome from '../Images/logo-awesome.svg';
import './scss/layout/_header.scss';


class Header extends Component {
    render () {
        return (
            <header className="@@header">
                <a className="@@link-to-index" href="https://adalab.es/">
                <img className="@@logo__awesome" src={LogoAwesome} alt="Logo Awesome Profile Cards" />
                </a>
            </header>
        );
    }
}

export default Header;