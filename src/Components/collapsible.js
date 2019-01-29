import React, { Component } from "react";
import PropTypes from "prop-types";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowIcon: props.arrowIcon,
      collapsiblehidden: props.collapsiblehidden
    };
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible(event) {
    if (this.state.arrowIcon.includes("fa-angle-up")) {
      this.setState({
        arrowIcon: "fa-angle-down",
        collapsiblehidden: true
      });
    } else {
      this.setState({ 
        arrowIcon: "fa-angle-up", 
        collapsiblehidden: false
      });
    }
  }

  render() {
    return (
      <section>
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

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  arrowIcon: PropTypes.string.isRequired,
  collapsible: PropTypes.bool.isRequired,
  toggleCollapsible: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  handlerSendBackend: PropTypes.func,
};

export default Collapsible;
