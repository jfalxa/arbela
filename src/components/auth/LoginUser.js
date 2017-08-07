import React          from 'react';
import LoginForm      from './LoginForm';
import withUser       from './withUser';
import withSigninUser from './withSigninUser';


class Login extends React.Component
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
        const { email, password }                  = this.state;

        signinUser( { email, password } )
            .then( () => console.log( 'User signed in' ) )
            .then( refetchUser )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed signing in user', err ) );
    }


    render()
    {
        const { email, password } = this.state;

        return (

            <LoginForm
                email={ email }
                password={ password }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withSigninUser( Login ) );
