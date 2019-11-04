import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss';

const Signup = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (confirmPassword !== password) return alert("Passwords Do not match");
        signUpStart(displayName, email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your emaul and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='eamil'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    handleChange={handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})

export default connect(null, mapDispatchToProps)(Signup);