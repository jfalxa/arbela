import React            from 'react';
import AuthBox          from './AuthBox';
import AuthForm         from './AuthForm';
import Input            from '../utilities/Input';
import SubmitButton     from '../utilities/SubmitButton';
import ButtonLink       from '../utilities/ButtonLink';
import withRegisterUser from '../../graphcool/auth/registerUser';



class UserRegister extends React.Component
{
    state =
    {
        name     : '',
        email    : '',
        password : ''
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { createUser, signinUser, refetchUser, history } = this.props;

        createUser( this.state )
            .then( () => signinUser( this.state ) )
            .then( refetchUser )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        const { email, password, name } = this.state;

        return (

            <AuthBox>

                <AuthForm onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                    <Input name="name" placeholder="name" value={ name } />
                    <Input name="email" placeholder="email" value={ email } />
                    <Input name="password" placeholder="password" value={ password } />
                    <SubmitButton>Register</SubmitButton>
                </AuthForm>

                <ButtonLink to="/login">or Login</ButtonLink>

            </AuthBox>

        );
    }
}


export default withRegisterUser( UserRegister );
