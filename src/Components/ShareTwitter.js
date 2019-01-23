import React, { Component } from "react";

class ShareTwitter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.sendRequest = this.sendRequest.bind(this);
    // this.showURL = this.showURL.bind(this);
    // this.handlerSendBackend = this.handlerSendBackend.bind(this);
  }

  render() {
    return (
      <div className="twitter_mother">
        <div className="twitter_container">
          <h2 className="title_createcard_twitter">
            La tarjeta ha sido creada:
          </h2>
          <a className="twitter_link" href={this.props.showUrl} >{this.props.showUrl}</a>
          <a className="button_twitter twitter-share-button" href="">
            <i className="fab fa-twitter" />Compartir en Twitter
          </a>
        </div>
      </div>
    );
  }
}

export default ShareTwitter;
