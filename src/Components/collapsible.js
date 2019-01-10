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
</section>
      )
    }
}

export default Collapsible