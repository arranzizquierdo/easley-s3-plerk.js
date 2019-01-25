import React, { Component } from 'react';
import CardGenerator from './Components/CardGenerator';
import LandingPage from './Components/LandingPage';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
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
      },
      fr: new FileReader(),
      showUrl: '', 
      isLoading: true
      }
    this.backEndCall();
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTypographyChange = this.handleTypographyChange.bind(this);
    this.handleSkillsSelect = this.handleSkillsSelect.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.fileInput = React.createRef();
    this.addImageToState = this.addImageToState.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleFakeclick = this.handleFakeclick.bind(this);
    this.handlerSendBackend = this.handlerSendBackend.bind(this);
  }

  sendRequest() {
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      body: JSON.stringify(this.state.userInfo),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response=> {
        return response.json()
      })
      .then(data => {
        return (
          console.log('success',data),
          this.setState ({
            showUrl: data.cardURL,
            isLoading: false
          })
        )
      })
      // .then(function(data) {
      //   return (
      //     console.log('success', data.cardURL),
      //     this.setState = {
      //       showUrl: data.cardURL
      //     }
      //     );
      // })
      // .then(function (result) {
      //   showURL(result);
      // })
       .catch(function(error) {
       console.log('error', error);
       });
  }
  

  handlerSendBackend(event) {
    event.preventDefault();
    this.sendRequest();
  }

  addImageToState(){
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          photo: this.state.fr.result,
        }
      }
    });
  }

  handleImage(event) {
    event.preventDefault();
    const myFile = this.fileInput.current;
    console.dir('this.fileInput.current',myFile);
    const fileUpdatedbyuser = this.fileInput.current.files[0];
    console.dir('this.fileInput.current',this.fileInput.current.files) 
    this.state.fr.addEventListener('load', this.addImageToState);
    this.state.fr.readAsDataURL(fileUpdatedbyuser); 
  }

  handleFakeclick(){
    this.fileInput.current.click();
  }


  backEndCall() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => response.json())
      .then(data => this.setState({ skills: data.skills }));
  }

  handleColorChange(value) {
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

  handleTypographyChange(value) {
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

  handleSkillsSelect(event) {
    const skillValue = event.target.value;
    console.log('value=>', skillValue);
    const skillsArrUserInfo = this.state.userInfo.skills;
    console.log('arr skills', skillsArrUserInfo)
    let skillArrNew;
    if (skillsArrUserInfo.includes(skillValue)) {
      skillArrNew = skillsArrUserInfo.filter(skill => skill !== skillValue)
    } else {
      skillArrNew = skillsArrUserInfo.concat(skillValue)
    }
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        skills: skillArrNew
      }
    })
  }

  handleChangeInput(event) {
    const { value, name } = event.target;
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [name]: value,
        }
      }
    });
  }



  render() {
    const { skills, userInfo } = this.state;

    return (

      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            component={LandingPage}
          />

          <Route
            path='/CardGenerator'
            render={props =>
              <CardGenerator
                userInfo={userInfo}
                skills={skills}
                changeInput={this.handleChangeInput}
                changeColor={this.handleColorChange}
                changeTypography={this.handleTypographyChange}
                skillsSelect={this.handleSkillsSelect}
                srcimage = {this.state.userInfo.photo}
                file={this.fileInput}
                changeImage={this.handleImage}
                fakeclick={this.handleFakeclick}
                showUrl={this.state.showUrl}
                loading={this.state.isPushing}
                handlerSendBackend={this.handlerSendBackend}
              />
            }
          />  
        </Switch>
      </div>
    );
  }
}

export default App;
