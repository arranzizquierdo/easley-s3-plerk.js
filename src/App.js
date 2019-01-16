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
        "name": "Raquel",
        "job": "",
        "phone": "",
        "email": "",
        "linkedin": "",
        "github": "",
        "photo": "",
        "skills": ["HTML", "CSS", "GULP"]
      }
    };
    this.backEndCall();
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  backEndCall (){
    fetch ('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then (response => response.json())
      .then (data => this.setState({skills:data.skills}));
  }

  handleInputChange(event) {
    console.log(event.target.name);

  }



  render() {
    const {skills} = this.state;
    console.log('skills', skills);
    const {userInfo} = this.state;
    console.log(userInfo);

    return (
       
      <div className="App">

      <Header />

      <CardPreview 
      nameCard={userInfo.name.value}
      jobCard={userInfo.job}
      emailCard={userInfo.email}
      
      />


  <CollapsiblesThree />

 <Footer />

  </div>

    );
  }
}

export default App;
