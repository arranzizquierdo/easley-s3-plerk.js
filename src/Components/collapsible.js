import React, { Component } from "react";

class Collapsible extends Component {

  render() {
    return (
      <section className="custom-section">
        <form className="custom-form" action="" method="GET">
          <fieldset className="deco_fieldset">
            <div
              onClick={this.props.toggleCollapsible}
              className={`container_fieldset-title collapseform-design ${this.props.title}`}
            >
              <div className="container_fieldset-icon">
                <i className={this.props.icon} />
              </div>
              <legend className="fieldset_title fieldset_title--design">
                {this.props.title}
              </legend>
              <div className="container_arrow-icon">
                <i className={`fas ${this.props.arrowIcon} ${this.props.title} icon_design`} />
              </div>
            </div>
            <div className={`container ${(this.props.collapsible === false) ? "hidden" : ""}`}>
              {(this.props.title === "COMPARTE") ?
                <button
                  className="button_deco"
                  type="submit"
                  onClick={this.props.handlerSendBackend}>
                  <i className="far fa-address-card"></i>
                  Crear tarjeta
                </button> :
                <span></span>
              }
              {this.props.children}
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Collapsible;
