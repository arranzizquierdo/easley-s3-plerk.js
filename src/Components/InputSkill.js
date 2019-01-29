import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSkill extends Component {

    render() {
        const { skill, checked, disabled } = this.props;
        return (
            <React.Fragment>
                <input
                    defaultChecked={checked}
                    className={`checkbox__input checkbox__input--${skill}`}
                    id={skill}
                    type="checkbox"
                    name="skill_option"
                    value={skill}
                    onClick={this.props.skillsSelect}
                    disabled={disabled}
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

InputSkill.propTypes = {
    skill: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
}

export default InputSkill;