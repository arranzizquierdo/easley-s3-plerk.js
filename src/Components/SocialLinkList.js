import React, { Component } from "react";
import SocialLink from "./SocialLink";
import PropTypes from 'prop-types';

class SocialLinkList extends Component {
  render() {
    const { 
      colorClass, 
      itemsArr 
    } = this.props;
    return (
      <ul className="social__media-list">
        {itemsArr.map((item, i) => {
          return (
            <li key={i} className={`social__media-buttom ${colorClass.light}`}>
              <SocialLink
                id={item.id}
                link={item.link}
                href={this.props[item.id]}
                itemIcon={item.itemIcon}
                colorClass={colorClass}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

SocialLinkList.propTypes = {
  itmesArr: PropTypes.arrayOf(PropTypes.array),
  linkedin: PropTypes.string,
  github: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}

export default SocialLinkList;
