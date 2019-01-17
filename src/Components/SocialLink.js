import React, { Component } from 'react';

class SocialLink extends Component {
    render() { 
        return (
            <a className="icon__item" 
            href={`${this.props.link}${this.props.href}`}
            id={this.props.id}
            rel="noopener noreferrer"
            target="_blank">
            <i className={`${this.props.itemIcon} ${this.props.colorClass.dark }`}>
            </i>
            </a> 
        );
    }
}
 
export default SocialLink;