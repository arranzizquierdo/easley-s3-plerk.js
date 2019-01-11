import React, { Component } from 'react';

class SocialLink extends Component {
    render() { 
        return (
            <a className="icon__item" href="">
            <i className={this.props.itemIcon}>
            </i>
            </a> 
        );
    }
}
 
export default SocialLink;