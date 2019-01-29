import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

class ShareTwitter extends Component {

  render() {
    const { 
      showUrl
    } = this.props;
    
    return (
      <Fragment>
          <h2 className="title_createcard_twitter">
            La tarjeta ha sido creada:
          </h2>
          <a className="twitter_link" href={showUrl} >{showUrl}</a>
          <a className="button_twitter twitter-share-button" href={"https://twitter.com/intent/tweet?text=Mi%20tarjeta%20virtual%20&url="+showUrl}>
            <i className="fab fa-twitter" />Compartir en Twitter
          </a>
      </Fragment>
    );
  }
}

ShareTwitter.propTypes = {
  showUrl: PropTypes.string
}

export default ShareTwitter;
