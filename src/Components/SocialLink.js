import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialLink extends Component {
    render() {
        const {
            link,
            href,
            id,
            itemIcon,
            colorClass
        } = this.props;
        return (
            <a className="icon__item"
                href={`${link}${href}`}
                id={id}
                rel="noopener noreferrer"
                target="_blank">
                <i className={`${itemIcon} ${colorClass.dark}`}>
                </i>
            </a>
        );
    }
}

SocialLink.propTypes = {
    id: PropTypes.string,
    link: PropTypes.string,
    href: PropTypes.string,
    itemIcon: PropTypes.string
}

export default SocialLink;