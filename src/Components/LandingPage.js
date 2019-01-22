import React, { Component } from 'react';
import Footer from './Footer';
import LogoAwesome from '../Images/logo-awesome.svg';

class LandingPage extends Component {

    render() {
        return (
            <React.Fragment>
                <header class="header__index"> <a class="link__hidden" href="index.html">
                    <img class="logo__index" src={LogoAwesome} alt="Logo Awesome Profile Cards" />
                </a>
                </header>
                <main class="home__main">
                    <h1 class="home__tittle">Crea tu tarjeta de visita</h1>
                    <h2 class="home__subtittle">Crea mejores contactos profesionales de forma fácil y cómoda</h2>
                    <div class="home__buttonbox">
                        <ul class="buttonbox__icons">
                            <li class="buttonbox__icons__design">
                                <i class="far fa-object-ungroup icon__home"></i>
                                <p class="buttonbox__text__design">Diseña</p>
                            </li>
                            <li class="buttonbox__icons__fill">
                                <i class="far fa-keyboard icon__home"></i>
                                <p class="buttonbox__text__fill">Rellena</p>
                            </li>
                            <li class="buttonbox__icons__share">
                                <i class="fas fa-share-alt icon__home"></i>
                                <p class="buttonbox__text__share">Comparte</p>
                            </li>
                        </ul>
                    </div>
                    <a class="home__link__begin" href="cardCreator.html">Comenzar</a>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default LandingPage;