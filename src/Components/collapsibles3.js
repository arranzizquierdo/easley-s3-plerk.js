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
            <Collapsible title="DISEÑA" icon="fa fa-object-ungroup"/>
            <Collapsible title="RELLENA" icon="fa fa-keyboard"/>
            <Collapsible title="COMPARTE" icon="fa fa-share-alt"/>
        </div>
        )
}

}

export default CollapsiblesThree;