import React, { Component } from 'react';

class InputSkill extends Component {

    render() { 
        const { skill, checked } = this.props;
        return ( 
            <React.Fragment>
            <input 
                checked={checked}
                className={`checkbox__input checkbox__input--${skill}`} 
                id={skill} 
                type="checkbox" 
                name="skill_option" 
                value={skill}
                onClick={this.props.skillsSelect}
                />
            <label 
                className={`checkbox__label checkbox__label--${skill}`} 
                htmlFor={skill}>
                    {skill}
            </label>
            </React.Fragment>
         );
    }
}
 
export default InputSkill;