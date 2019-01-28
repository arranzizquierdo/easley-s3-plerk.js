import React, { Component, Fragment } from "react";

class ShareTwitter extends Component {


  render() {
    return (
      <Fragment>
          <h2 className="title_createcard_twitter">
            La tarjeta ha sido creada:
          </h2>
          <a className="twitter_link" href={this.props.showUrl} >{this.props.showUrl}</a>
          <a className="button_twitter twitter-share-button" href={"https://twitter.com/intent/tweet?text=Mi%20tarjeta%20virtual%20&url="+this.props.showUrl}>
            <i className="fab fa-twitter" />Compartir en Twitter
          </a>
      </Fragment>
    );
  }
}

export default ShareTwitter;
