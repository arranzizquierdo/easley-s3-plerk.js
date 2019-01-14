import React, { Component } from 'react';
import Collapsible from './collapsible';

class CollapsiblesThree extends Component {
    constructor(props){
            super(props);
            this.icon='';
            }

  render() {
    return (
        <div>
            <Collapsible title="DISEÑA" icon="far fa-object-ungroup" arrowIcon="fa-angle-up"/>
            <Collapsible title="RELLENA" icon="far fa-keyboard" arrowIcon="fa-angle-down"/>
            <Collapsible title="COMPARTE" icon="fas fa-share-alt" arrowIcon="fa-angle-down"/>
        </div>
        )
}

}

export default CollapsiblesThree;