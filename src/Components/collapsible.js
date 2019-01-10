import React, { Component } from 'react';
import '../scss/pages/_custom.scss';

class Collapsible extends Component {
    render() {
      return (
<section className="custom-section">
  <form className="custom-form" action="" method="GET">
    <fieldset className="deco_fieldset">
      <div className="container_fieldset-title collapseform-design">
        <div className="container_fieldset-icon">
          <i className="far fa-object-ungroup"></i>
        </div>
        <legend className="fieldset_title fieldset_title--design">Diseña</legend>
        <div className="container_arrow-icon">
          <i className="fas fa-angle-up icon_design"></i>
        </div>
      </div>
      <div className="form_design_content">
        <ul className="set_colors">
          <li>
            <h2 className="design_subtitle design_colors">Colores</h2>
          </li>
          <li className="color_container">
            <label className="list_item" htmlFor="setcolors_green">
              <div className="colors_direction">
                <div className="box_darkgreen"></div>
                <div className="box_bluesky"></div>
                <div className="box_greenhospital"></div>
              </div>
            </label>
            <input id="setcolors_green" type="radio" name="setcolors_option" defaultChecked={true} />
          </li>
          <li className="color_container">
            <label className="list_item" htmlFor="setcolors_red">
              <div className="colors_direction">
                <div className="box_redblood"></div>
                <div className="box_redtomato"></div>
                <div className="box_orangetomato"></div>
              </div>
            </label>
            <input id="setcolors_red" type="radio" name="setcolors_option"/>
          </li>
          <li className="color_container">
            <label className="list_item" htmlFor="setcolors_blue">
              <div className="colors_direction">
                <div className="box_greyblue"></div>
                <div className="box_greypale"></div>
                <div className="box_bluesummer"></div>
              </div>
            </label>
            <input id="setcolors_blue" type="radio" name="setcolors_option"/>
          </li>
        </ul>
        <ul className="set_container">
          <li className="title_fonts_container">
            <h2 className="design_subtitle design_fonts">Fuentes</h2>
          </li>
          <div className="type_fonts_container">
            <li className="fonts_position">
              <label className="list_item" htmlFor="Ubuntu">Ubuntu</label>
              <input className="selector_position" id="Ubuntu" type="radio" name="fonts_option" />
            </li>
            <li className="fonts_position">
              <label className="list_item" htmlFor="ComicSans">Comic Sans</label>
              <input className="selector_position" id="ComicSans" type="radio" name="fonts_option" defaultChecked={true} />
            </li>
            <li className="fonts_position">
              <label className="list_item" htmlFor="Montserrat">Montserrat</label>
              <input className="selector_position" id="Montserrat" type="radio" value="Montserrat" name="fonts_option" />
            </li>
          </div>
        </ul>
      </div>
    </fieldset>
  </form>
  <form className="fill-form" action="" method="POST">
    <fieldset className="deco_fieldset">
      <div className="container_fieldset-title collapseform-fill">
        <div className="container_fieldset-icon">
          <i className="far fa-keyboard"></i>
        </div>
        <legend className="fieldset_title fieldset_title--fill">Rellena</legend>
        <div className="container_arrow-icon">
          <i className="fas fa-angle-down icon_fill"></i>
        </div>
      </div>
      <div className="form_fill_content hidden">
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
    </fieldset>
  </form>
  <form className="share-form" action="" method="GET">
    <fieldset className="deco_fieldset">
      <div className="container_fieldset-title collapseform-share">
        <div className="container_fieldset-icon">
          <i className="fas fa-share-alt"></i>
        </div>
        <legend className="fieldset_title fieldset_title--share">Comparte</legend>
        <div className="container_arrow-icon">
          <i className="fas fa-angle-down icon_share"></i>
        </div>
      </div>
      <div className="form_share_content hidden">
        <button className="button_deco" type="submit"><i className="far fa-address-card"></i>Crear tarjeta</button>
      </div>
      <div className="hidden twitter_mother">
        <div className="twitter_container">
          <h2 className="title_createcard_twitter">La tarjeta ha sido creada:</h2>
          <a className="twitter_link" href=""></a>
          <a className="button_twitter twitter-share-button" href=""><i className="fab fa-twitter"></i>Compartir en Twitter</a>
        </div>
      </div>
    </fieldset>
  </form>
</section>
      )
    }
}

export default Collapsible