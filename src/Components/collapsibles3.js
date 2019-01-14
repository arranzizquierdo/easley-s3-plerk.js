import React, { Component } from 'react';
import Collapsible from './collapsible';
import DesignContent from './DesignContent';

class CollapsiblesThree extends Component {
    constructor(props) {
        super(props);
        this.icon = '';
    }

    render() {
        return (
            <div>
                <Collapsible title="DISEÑA" icon="far fa-object-ungroup" arrowIcon="fa-angle-up">
                    <DesignContent />
                </Collapsible>
                <Collapsible title="RELLENA" icon="far fa-keyboard" arrowIcon="fa-angle-down">

                    <div className="form_fill_content">
                        <label className="fill_subtitle" htmlFor="firstName">Nombre completo</label>
                        <input className="input_box full__name" id="firstName" placeholder="Ej: Sally Jill" type="text" name="firstName" />
                        <label className="fill_subtitle" htmlFor="position">Puesto</label>
                        <input className="input_box profession__input" id="position" placeholder="Ej: Front-end unicorn" type="text" name="position" />
                        <label className="fill_subtitle" htmlFor="profileImage">Imagen de perfil</label>
                        <div className="container_add-image">
                            <input className="button_add-image" type="button" value="Añadir imagen" />
                            <input className="action__hiddenField" type="file" id="img-selector" />
                            <div className="container_image-preview">
                                <img src="" alt="" className="image-preview" />
                            </div>
                        </div>
                        <label className="fill_subtitle" htmlFor="mail">Email</label>
                        <input className="input_box email__input" id="mail" placeholder="Ej: Sally-hill@gmail.com" type="email" name="mail" />
                        <label className="fill_subtitle" htmlFor="phone">Teléfono</label>
                        <input className="input_box phone__input" id="phone" placeholder="Ej: 555-55-55-55" type="tel" name="phone" />
                        <label className="fill_subtitle" htmlFor="linkedin">Linkedin</label>
                        <input className="input_box linkedin__input" id="linkedin" placeholder="Ej: sally.hill" type="text" name="linkedin" />
                        <label className="fill_subtitle" htmlFor="github">Github</label>
                        <input className="input_box github__input" id="github" placeholder="Ej: sally-hill" type="text" name="github" />
                        <h3 className="fill_subtitle fill_subtitle--skills">Habilidades (máximo 3)</h3>
                        <div className="container_skills"></div>
                    </div>
                </Collapsible>
                <Collapsible title="COMPARTE" icon="fas fa-share-alt" arrowIcon="fa-angle-down">
                <div>
                <div className="form_share_content ">
        <button className="button_deco" type="submit"><i className="far fa-address-card"></i>Crear tarjeta</button>
      </div>
      <div className="hidden twitter_mother">
        <div className="twitter_container">
          <h2 className="title_createcard_twitter">La tarjeta ha sido creada:</h2>
          <a className="twitter_link" href=""></a>
          <a className="button_twitter twitter-share-button" href=""><i className="fab fa-twitter"></i>Compartir en Twitter</a>
        </div>
      </div>
                </div>
                </Collapsible>
            </div>
        )
    }

}

export default CollapsiblesThree;