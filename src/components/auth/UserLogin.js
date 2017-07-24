import React         from 'react';
import { Link }      from 'react-router-dom';
import AuthBox       from './AuthBox';
import AuthForm      from './AuthForm';
import Input         from '../utilities/Input';
import SubmitButton  from '../utilities/SubmitButton';
import ButtonLink    from '../utilities/ButtonLink';
import withLoginUser from '../../graphcool/auth/loginUser';


class UserLogin extends React.Component
{
    state =
    {
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

        const { signinUser, refetchUser, history } = this.props;

        signinUser( this.state )
            .then( refetchUser )
            .then( () => history.replace( '/' ) );
    }


    render()
    {
        const { email, password } = this.state;

        return (

            <AuthBox>

                <AuthForm onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                    <Input name="email" placeholder="email" value={ email } />
                    <Input name="password" placeholder="password" value={ password } />
                    <SubmitButton>Login</SubmitButton>
                </AuthForm>

                <ButtonLink to="/register">or Register</ButtonLink>

            </AuthBox>

        );
    }
}


export default withLoginUser( UserLogin );
