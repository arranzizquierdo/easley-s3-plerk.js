import React, { Component } from 'react';
import CollapsiblesThree from './Components/collapsibles3';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardPreview from './Components/CardPreview';

class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      skills: [],
      userInfo: {
        "palette": 1,
        "typography": 2,
        "name": "",
        "job": "",
        "phone": "",
        "email": "katia.rojas.sandoval@gmail.com",
        "linkedin": "katia",
        "github": "holi holi",
        "photo": "",
        "skills": ["HTML", "CSS", "GULP"]
      }
    };
    this.backEndCall();
  }

  backEndCall (){
    fetch ('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then (response => response.json())
      .then (data => this.setState({skills:data.skills}));
  }



  render() {
    // const {skills} = this.state;
    const userInfo= this.state.userInfo;

    return (
       
      <div className="App">

      <Header />

      <CardPreview 
      
      phone = {userInfo.phone}
      email = {userInfo.email}
      linkedin = {userInfo.linkedin}
      github = {userInfo.github}

      />


  <CollapsiblesThree />

 <Footer />

  </div>

    );
  }
}

export default App;
