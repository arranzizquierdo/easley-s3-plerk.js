import React, { Component } from 'react';
import CardGenerator from './Components/CardGenerator';
import LandingPage from './Components/LandingPage';
import { Route, Switch } from 'react-router-dom';


const defaultInfo = {
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      userInfo: {
        palette: {
          dark: "add__color__dark-green",
          id: 1,
          light: "add__border__light-green",
          medium: "add__color__medium-green"
        },
        typography: {
          fontClass: "add__font__comicsans",
          id: 2
        },
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
      isLoading: true,
      showTwitterContainer: false,
      openDesignCollapsible: true,
      openFillCollapsible: false,
      openShareCollapsible: false,
      arrowDesignCollapsible: "fa-angle-up",
      arrowFillCollapsible: "fa-angle-down",
      arrowShareCollapsible: "fa-angle-down",
    }
    this.backEndCall();
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTypographyChange = this.handleTypographyChange.bind(this);
    this.handleSkillsSelect = this.handleSkillsSelect.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.fileInput = React.createRef();
    this.addImageToState = this.addImageToState.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleFakeclick = this.handleFakeclick.bind(this);
    this.handlerSendBackend = this.handlerSendBackend.bind(this);
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  componentDidMount() {
    this.getSavedData();
  }

  savedData(data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  
  getSavedData() {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (userData !== null) {
      console.log('user data in local', userData)
      return(
      this.setState({
        userInfo: {
        palette: userData.palette,
        typography: userData.typography,
        "name": userData.name,
        "job": userData.job,
        "phone": userData.phone,
        "email": userData.email,
        "linkedin": userData.linkedin,
        "github": userData.github,
        "photo": userData.photo,
        "skills": userData.skills
        //"skills": ["HTML", "CSS", "Gulp"]
        }
      })
      )
    } else {
      //this.fetchResults();
      //return [];
      // return {
      //   userInfo: {
      //     ...prevState.userInfo,
      //     [name]: value,
      //   }
      // }
      return (
        // this.setState({
        //   userInfo: {
        //   palette: "",
        //   typography: "",
        //   "name": "hola",
        //   "job": "",
        //   "phone": "",
        //   "email": "",
        //   "linkedin": "",
        //   "github": "",
        //   "photo": '../Images/default.jpeg',
        //   "skills": ["HTML", "CSS", "Gulp"]
        //   }
        // })
        {}
      )
    }
  }

  sendRequest() {
    this.setState({
      showTwitterContainer: true
    })
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      body: JSON.stringify(this.state.userInfo),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return (
          console.log('success', data),
          this.setState({
            showUrl: data.cardURL,
            showTwitterContainer: true,
            isLoading: false,
          })
        )
      })
      .catch(function (error) {
        console.log('error', error);
      });
    //save showUrl in local
  }


  handlerSendBackend(event) {
    event.preventDefault();
    this.sendRequest();
  }

  addImageToState() {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          photo: this.state.fr.result,
        }
      }
    });
    let userInfo = this.state.userInfo
    this.savedData(userInfo);
  }

  toggleCollapsible(event) {
    console.log('event target', event.target.className);
    if (event.target.className.includes("DISEÑA") && this.state.arrowDesignCollapsible.includes("fa-angle-up")) {
      this.setState({
        openDesignCollapsible: false,
        arrowDesignCollapsible: "fa-angle-down",
      });
    }

    if (event.target.className.includes("DISEÑA") && this.state.arrowDesignCollapsible.includes("fa-angle-down")) {
      this.setState({
        openDesignCollapsible: true,
        openFillCollapsible: false,
        openShareCollapsible: false,
        arrowDesignCollapsible: "fa-angle-up",
        arrowFillCollapsible: "fa-angle-down",
        arrowShareCollapsible: "fa-angle-down",
      });
    }

    if (event.target.className.includes("RELLENA") && this.state.arrowFillCollapsible.includes("fa-angle-down")) {
      this.setState({
        openDesignCollapsible: false,
        openFillCollapsible: true,
        openShareCollapsible: false,
        arrowDesignCollapsible: "fa-angle-down",
        arrowFillCollapsible: "fa-angle-up",
        arrowShareCollapsible: "fa-angle-down",
      });
    }

    if (event.target.className.includes("RELLENA") && this.state.arrowFillCollapsible.includes("fa-angle-up")) {
      this.setState({
        openFillCollapsible: false,
        arrowFillCollapsible: "fa-angle-down",
      });
    }

    if (event.target.className.includes("COMPARTE") && this.state.arrowShareCollapsible.includes("fa-angle-down")) {
      this.setState({
        openDesignCollapsible: false,
        openFillCollapsible: false,
        openShareCollapsible: true,
        arrowDesignCollapsible: "fa-angle-down",
        arrowFillCollapsible: "fa-angle-down",
        arrowShareCollapsible: "fa-angle-up",
      });
    }

    if (event.target.className.includes("COMPARTE") && this.state.arrowShareCollapsible.includes("fa-angle-up")) {
      this.setState({
        openShareCollapsible: false,
        arrowShareCollapsible: "fa-angle-down",
      });
    }
  }

  handleImage(event) {
    event.preventDefault();
    const myFile = this.fileInput.current;
    console.dir('this.fileInput.current', myFile);
    const fileUpdatedbyuser = this.fileInput.current.files[0];
    console.dir('this.fileInput.current', this.fileInput.current.files)
    this.state.fr.addEventListener('load', this.addImageToState);
    this.state.fr.readAsDataURL(fileUpdatedbyuser);
  }

  handleFakeclick() {
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
        light: 'add__border__light-green',
        id: 1
      },
      2: {
        dark: 'add__color__dark-red',
        medium: 'add__color__medium-red',
        light: 'add__border__light-red',
        id: 2
      },
      3: {
        dark: 'add__color__dark-blue',
        medium: 'add__color__medium-blue',
        light: 'add__border__light-blue',
        id: 3
      },
    };
    // console.log('handleColorChange', paletteNumbers[value]);
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        palette: paletteNumbers[value]
      }
    });
    this.savedData(this.state.userInfo);
    this.forceUpdate();
  }

  handleTypographyChange(value) {
    const typographyTypes = {
      1: { fontClass: 'add__font__ubuntu', id: 1},
      2: { fontClass: 'add__font__comicsans', id: 2},
      3: { fontClass: 'add__font__monserrat', id: 3}
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
    // const skillValue = event.target.value;
    // const skillChecked = event.target.checked;
    // const skillsArrUserInfo = this.state.userInfo.skills;
    // let skillArrNew;
    // if (skillsArrUserInfo.includes(skillValue)) {
    //   skillArrNew = skillsArrUserInfo.filter(skill => skill !== skillValue)
    // } else {
    //   skillArrNew = skillsArrUserInfo.concat(skillValue)
    // }
    //   this.setState({
  //     userInfo: {
  //       ...this.state.userInfo,
  //       skills: skillArrNew
  //     }
  //   })
    const skillValue = event.target.value;
    const skillsArrUserInfo = this.state.userInfo.skills;
    let skillArrNew;

    if (skillsArrUserInfo.includes(skillValue)) {
      skillArrNew = skillsArrUserInfo.filter(skill => skill !== skillValue)
      this.setState((prevState) => {
        return {
          userInfo: {
            ...this.state.userInfo,
            skills: skillArrNew
          }
        }
      }) 
    } else if (skillsArrUserInfo.length < 3) {
      skillArrNew = skillsArrUserInfo.concat(skillValue)
      this.setState((prevState) => {
        return {
          userInfo: {
            ...this.state.userInfo,
            skills: skillsArrUserInfo.concat(skillValue)
          }
        }
      }) 
    }
    let userInfo = this.state.userInfo
    this.savedData(userInfo);
  }


  handleChangeInput(event) {
    const { value, name } = event.target;

    this.setState((prevState) => {
      console.log('prevstate', prevState.userInfo)
      return {
        userInfo: {
          ...prevState.userInfo,
          [name]: value,
        }
      }
    });
  
    console.log('state user info name ',this.state.userInfo)
    this.savedData(this.state.userInfo);
  }

  handleReset() {
    this.setState({
      userInfo: defaultInfo
    })
    
  }

  componentDidUpdate() {
    console.log('this state userinfo component did update',this.state.userInfo)
    this.savedData(this.state.userInfo);
  }

  render() {
    const {
      skills,
      userInfo,
      showUrl,
      isLoading,
      showTwitterContainer,
      openDesignCollapsible,
      openFillCollapsible,
      openShareCollapsible,
      arrowDesignCollapsible,
      arrowFillCollapsible,
      arrowShareCollapsible
    } = this.state;

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
                srcimage={this.state.userInfo.photo}
                file={this.fileInput}
                changeImage={this.handleImage}
                fakeclick={this.handleFakeclick}
                showUrl={showUrl}
                loading={isLoading}
                handlerSendBackend={this.handlerSendBackend}
                showTwitterContainer={showTwitterContainer}
                toggleCollapsible={this.toggleCollapsible}
                openDesignCollapsible={openDesignCollapsible}
                openFillCollapsible={openFillCollapsible}
                openShareCollapsible={openShareCollapsible}
                arrowDesignCollapsible={arrowDesignCollapsible}
                arrowFillCollapsible={arrowFillCollapsible}
                arrowShareCollapsible={arrowShareCollapsible}
                handleReset={this.handleReset}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
