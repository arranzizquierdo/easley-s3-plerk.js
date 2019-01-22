import React, { Component } from "react";

class ShareTwitter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.sendRequest = this.sendRequest.bind(this);
    // this.showURL = this.showURL.bind(this);
    // this.handlerSendBackend = this.handlerSendBackend.bind(this);
  }

//   sendRequest() {
//     fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
//       method: "POST",
//       body: JSON.stringify(this.state.userInfo),
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//       .then(function(resp) {
//         return resp.json();
//       })
//       .then(function(result) {
//         showURL(result);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//   showURL(result) {
//     if (result.success) {
//       twitterLinkElement.innerHTML =
//         '<a class="twitter_link" href=' +
//         result.cardURL +
//         ">" +
//         result.cardURL +
//         "</a>";
//       twitterAnchor.href = `https://twitter.com/intent/tweet?text=¡Mira%20qué%20tarjeta%20más%20chula%20he%20creado%20con%20Awesome%20profile-cards!%20${
//         result.cardURL
//       }`;
//     } else {
//       twitterLinkElement.innerHTML = "ERROR:" + result.error;
//     }
//   }

//   handlerSendBackend(event) {
//     event.preventDefault();
//     this.sendRequest();
//     twitterMotherElement.classList.remove("hidden");
//     buttonCreateCardElement.classList.add("button_created");
//   }

  render() {
    return (
      <div className="hidden twitter_mother">
        <div className="twitter_container">
          <h2 className="title_createcard_twitter">
            La tarjeta ha sido creada:
          </h2>
          <a className="twitter_link" href="" />
          <a className="button_twitter twitter-share-button" href="">
            <i className="fab fa-twitter" />Compartir en Twitter
          </a>
        </div>
      </div>
    );
  }
}

export default ShareTwitter;
