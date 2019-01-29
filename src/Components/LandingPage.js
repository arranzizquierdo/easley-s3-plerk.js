import React, { Component } from "react";
import Footer from "./Footer";
import LogoAwesome from "../Images/logo-awesome.svg";
import { Link } from "react-router-dom";

class LandingPage extends Component {
	render() {
		return (
			<div className="body__landing-page">
				<header className="header__index">
					<img
						className="logo__index"
						src={LogoAwesome}
						alt="Logo Awesome Profile Cards"
					/>
				</header>
				<main className="home__main">
					<h1 className="home__tittle">Crea tu tarjeta de visita</h1>
					<h2 className="home__subtittle">
						Crea mejores contactos profesionales de forma fácil y cómoda
					</h2>
					<div className="home__buttonbox">
						<ul className="buttonbox__icons">
							<li className="buttonbox__icons__design">
								<i className="far fa-object-ungroup icon__home" />
								<p className="buttonbox__text__design">Diseña</p>
							</li>
							<li className="buttonbox__icons__fill">
								<i className="far fa-keyboard icon__home" />
								<p className="buttonbox__text__fill">Rellena</p>
							</li>
							<li className="buttonbox__icons__share">
								<i className="fas fa-share-alt icon__home" />
								<p className="buttonbox__text__share">Comparte</p>
							</li>
						</ul>
					</div>
					<Link className="home__link__begin" to="/CardGenerator">
						Comenzar
					</Link>
				</main>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
