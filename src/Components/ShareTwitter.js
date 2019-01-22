import React, { Component } from 'react';

class ShareTwitter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span>
            <div>
            <button onClick={this.props.handleButtonCreateCard} className="button_deco" type="submit"><i className="far fa-address-card"></i>Crear tarjeta</button>
            </div>
            <div className="hidden twitter_mother">
                <div className="twitter_container">
                    <h2 className="title_createcard_twitter">La tarjeta ha sido creada:</h2>
                    <a className="twitter_link" href=""></a>
                    <a className="button_twitter twitter-share-button" href=""><i className="fab fa-twitter"></i>Compartir en Twitter</a>
                </div>
            </div>
            </span>
        );
    }
}
 
export default ShareTwitter;