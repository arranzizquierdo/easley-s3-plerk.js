import React, { Component } from 'react';
import CollapsiblesThree from './Components/collapsibles3';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardPreview from './Components/CardPreview';

class App extends Component {
  render() {
    return (
       
      <div className="App">

      <Header />

      <CardPreview />


  <CollapsiblesThree />

 <Footer />

  </div>

    );
  }
}

export default App;
