import React, { Component } from 'react';
import SocialLink from './SocialLink';

class SocialLinkList extends Component {
    render() {
        return (
            <ul className="social__media-list">
                {this.props.itemsArr.map((item, i) => {
                    return <li key={i} className="social__media-buttom">
                        <SocialLink
                        id={item.id}
                        href= {this.props[item.id]}
                        itemIcon={item.itemIcon}                        
                        />
                    </li>
                })}
            </ul>
        )
    }
}

export default SocialLinkList;