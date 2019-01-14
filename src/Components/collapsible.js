import React, { Component } from "react";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      icon: props.icon,
      arrowIcon: props.arrowIcon,
      collapsiblehidden: props.collapsiblehidden
    };
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible(event) {
    if (this.state.arrowIcon.includes("fa-angle-up")) {
      this.setState({
        arrowIcon: "fa-angle-down",
        collapsiblehidden: "hidden"
      });
    } else {
      this.setState({ 
        arrowIcon: "fa-angle-up", 
        collapsiblehidden: ""});
    }
  }

  render() {
    return (
      <section className="custom-section">
        <form className="custom-form" action="" method="GET">
          <fieldset className="deco_fieldset">
            <div
              onClick={this.toggleCollapsible}
              className="container_fieldset-title collapseform-design"
            >
              <div className="container_fieldset-icon">
                <i className={this.state.icon} />
              </div>
              <legend className="fieldset_title fieldset_title--design">
                {this.state.title}
              </legend>
              <div className="container_arrow-icon">
                <i className={`fas ${this.state.arrowIcon} icon_design`} />
              </div>
            </div>
            <div className={`container ${this.state.collapsiblehidden}`}>
            {this.props.children}
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Collapsible;
