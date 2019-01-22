import React, { Component } from 'react';
import LogoAwesome from '../Images/logo-awesome.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header__card-creator">
                <Link className="@@link-to-index" to='/'>
                    <img className="logo__card-creator" src={LogoAwesome} alt="Logo Awesome Profile Cards" />
                </Link>
            </header>
        );
    }
}

export default Header;