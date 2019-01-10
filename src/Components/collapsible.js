import React, { Component } from 'react';
import DesignContent from './DesignContent';

class Collapsible extends Component {
  // constructor(props){
  //     super(props);
  //     this.iconTitle='';
  //     this.xxxxxxx = this.xxxxxxx.bind(this);
  //     }
  // }
    render() {
      return (
<section className="custom-section">
  <form className="custom-form" action="" method="GET">
    <fieldset className="deco_fieldset">

      <div className="container_fieldset-title collapseform-design">
        <div className="container_fieldset-icon">
          <i className={this.props.icon}></i>
        </div>
        <legend className="fieldset_title fieldset_title--design">{this.props.title}</legend>
        <div className="container_arrow-icon">
          <i className="fas fa-angle-up icon_design"></i>
        </div>
      </div>
 
 <DesignContent />
    </fieldset>
  </form>
</section>
      )
    }
}

export default Collapsible;