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
        palette: "",
        typography: "",
        "name": "",
        "job": "",
        "phone": "",
        "email": "",
        "linkedin": "",
        "github": "",
        "photo": "",
        "skills": ["HTML", "CSS", "Gulp"]
      }
    };
    this.backEndCall();
    this.handleColorChange= this.handleColorChange.bind(this);
    this.handleTypographyChange= this.handleTypographyChange.bind(this);
    this.handleSkillsSelect = this.handleSkillsSelect.bind(this);
  }

  backEndCall (){
    fetch ('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then (response => response.json())
      .then (data => this.setState({skills:data.skills}));
  }

  handleColorChange (value) {
    const paletteNumbers = {
      // 1: 'add__color__medium-green',
      // 2: 'add__color__light-red',
      // 3: 'add__color__medium-blue'
      1: {
        dark: 'add__color__dark-green',
        medium: 'add__color__medium-green',
        light: 'add__border__light-green'
      },
      2: {
        dark: 'add__color__dark-red',
        medium: 'add__color__medium-red',
        light: 'add__border__light-red'
      },
      3: {
        dark: 'add__color__dark-blue',
        medium: 'add__color__medium-blue',
        light: 'add__border__light-blue' 
      },
    };

    // console.log('handleColorChange', paletteNumbers[value]);
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        palette: paletteNumbers[value]
      }
    });
    this.forceUpdate();
  }

  handleTypographyChange (value) {
    const typographyTypes = {
      1: 'add__font__ubuntu',
      2: 'add__font__comicsans',
      3: 'add__font__monserrat'
    };

    this.setState({
      userInfo: {
        ...this.state.userInfo,
        typography: typographyTypes[value]
      }
    });
    this.forceUpdate();
  }

  handleSkillsSelect (event) {
    const skillValue = event.target.value;
    console.log('value=>', skillValue);
    const skillsArrUserInfo = this.state.userInfo.skills;
    console.log('arr skills', skillsArrUserInfo)
    let skillArrNew;
    if (skillsArrUserInfo.includes(skillValue)) {
      skillArrNew= skillsArrUserInfo.filter(skill => skill !== skillValue)
    } else {
      skillArrNew= skillsArrUserInfo.concat(skillValue)
    }
    this.setState ({
      userInfo: {
        ...this.state.userInfo,
        skills: skillArrNew
      }
    })
  }

  render() {
    const {skills, userInfo} = this.state;
    // console.log('skills', skills);
    // console.log('userInfo', userInfo);

    return (
       
      <div className="App">

      <Header />

      <CardPreview colorClass={userInfo.palette} typographyClass={userInfo.typography} skillsClass={userInfo.skills}/>


  <CollapsiblesThree changeColor={this.handleColorChange} changeTypography={this.handleTypographyChange} skillsSelect={this.handleSkillsSelect}  skills= {skills} userInfo= {userInfo}/>

 <Footer />

  </div>

    );
  }
}

export default App;
