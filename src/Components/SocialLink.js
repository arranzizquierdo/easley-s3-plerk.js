import React, { Component } from 'react';

class SocialLink extends Component {
    render() { 
        return (
            <a className="icon__item" 
            href={this.props.href} 
            id={this.props.id}>
            <i className={`${this.props.itemIcon} ${this.props.colorClass.dark }`}>
            </i>
            </a> 
        );
    }
}
 
export default SocialLink;