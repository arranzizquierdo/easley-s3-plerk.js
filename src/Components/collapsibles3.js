import React, { Component } from 'react';
import Collapsible from './collapsible';
import DesignContent from './DesignContent';
import InputSkill from './InputSkill';
import DefaultImage from '../Images/default.jpeg';

class CollapsiblesThree extends Component {
    constructor(props) {
        super(props);
        this.icon = '';
        console.log('props colap3', props);
    }
    
handleCheckedSkills(skill){
    console.log(this.props)
   return (this.props.userInfo.skills.includes(skill)) 
    ? true 
    : false
}

    render() {
        const { skills } = this.props;
        console.log('skills', skills);
        const skillsSelect = this.props.skillsSelect;
        return (
            <div>
                <Collapsible title="DISEÑA" icon="far fa-object-ungroup" arrowIcon="fa-angle-up" collapsiblehidden={false} >
                    <DesignContent {...this.props} />
                </Collapsible>
                <Collapsible title="RELLENA" icon="far fa-keyboard" arrowIcon="fa-angle-down" collapsiblehidden={true} skills= {skills}>

                    <div>
                        <label className="fill_subtitle" htmlFor="firstName">Nombre completo</label>
                        <input onChange={this.props.changeInput} className="input_box full__name" value={this.props.nameCardInput} id="firstName" placeholder="Ej: Sally Jill" type="text" name="name" />
                        <label className="fill_subtitle" htmlFor="position">Puesto</label>
                        <input onChange={this.props.changeInput} className="input_box profession__input" id="position" placeholder="Ej: Front-end unicorn" value={this.props.jobCardInput} type="text" name="job" />
                        <label className="fill_subtitle" htmlFor="profileImage">Imagen de perfil</label>
                        <div className="container_add-image">
                            <input type="button"  onClick={this.props.fakeclick} className="button_add-image" value="Añadir imagen" />
                            <input className="action__hiddenField" ref={this.props.file} type="file" onChange={this.props.changeImage} />
                            <div className="container_image-preview">
                                <img src={(this.props.srcimage === "")? DefaultImage : this.props.srcimage} alt="user" className="image-preview" />
                            </div>
                        </div>
                        <label className="fill_subtitle" htmlFor="mail">Email</label>
                        <input value={this.props.email} onChange={this.props.changeInput} name="email" className="input_box email__input" id="mail" placeholder="Ej: Sally-hill@gmail.com" type="email" />
                        <label className="fill_subtitle" htmlFor="phone">Teléfono</label>
                        <input value={this.props.phone} onChange={this.props.changeInput} name="phone" className="input_box phone__input" id="phone" placeholder="Ej: 555-55-55-55" type="tel" />
                        <label className="fill_subtitle" htmlFor="linkedin">Linkedin</label>
                        <input value={this.props.linkedin} onChange={this.props.changeInput} name="linkedin" className="input_box linkedin__input" id="linkedin" placeholder="Ej: sally.hill" type="text" />
                        <label className="fill_subtitle" htmlFor="github">Github</label>
                        <input value={this.props.github} onChange={this.props.changeInput} name="github" className="input_box github__input" id="github" placeholder="Ej: sally-hill" type="text" />
                        <h3 className="fill_subtitle fill_subtitle--skills">Habilidades (máximo 3)</h3>
                        <div className="container_skills" skills= {skills}>
                            {skills.map ((skill, i) => {
                                return <InputSkill key={i} skill={skill} skillsSelect={skillsSelect} checked={this.handleCheckedSkills(skill)}/>
                            })}
                            
                        </div>
                    </div>
                </Collapsible>
                <Collapsible title="COMPARTE" icon="fas fa-share-alt" arrowIcon="fa-angle-down" collapsiblehidden={true}>
                    <div>
                        <div>
                            <button className="button_deco" type="submit"><i className="far fa-address-card"></i>Crear tarjeta</button>
                        </div>
                        {/* 
                        <div className="hidden twitter_mother">
                            <div className="twitter_container">
                                <h2 className="title_createcard_twitter">La tarjeta ha sido creada:</h2>
                                <a className="twitter_link" href=""></a>
                                <a className="button_twitter twitter-share-button" href=""><i className="fab fa-twitter"></i>Compartir en Twitter</a>
                            </div>
                        </div> */}
                    </div>
                </Collapsible>
            </div>
        )
    }

}

export default CollapsiblesThree;