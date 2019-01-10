import React, { Component } from 'react';
import Collapsible from './collapsible';

class CollapsiblesThree extends Component {
    constructor(props){
            super(props);
            this.icon='';
            }
        }
  render() {
    return (
        <div>
            <Collapsible title="DISEÑA" icon="far fa-ungroup"/>
            <Collapsible title="RELLENA" icon="far fa-keyboard"/>
            <Collapsible title="COMPARTE" icon="far fa-share-alt"/>
        </div>
        )
}


export default CollapsiblesThree;