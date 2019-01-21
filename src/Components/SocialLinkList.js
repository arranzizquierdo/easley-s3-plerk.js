import React, { Component } from 'react';
import SocialLink from './SocialLink';

class SocialLinkList extends Component {
    render() {
        const colorClass = this.props.colorClass;
        return (
            <ul className="social__media-list">
                {this.props.itemsArr.map((item, i) => {
                    return <li key={i} className={`social__media-buttom ${colorClass.light}`}>
                    <SocialLink
                        id={item.id}
                        link={item.link}
                        href= {this.props[item.id]}
                        itemIcon={item.itemIcon}
                        colorClass={colorClass}
                    />
                    </li>
                })}
            </ul>
        )
    }
}

export default SocialLinkList;