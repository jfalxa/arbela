import React          from 'react';
import LoginForm      from './LoginForm';
import withSigninUser from './signinUser';


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

        const { signinUser }      = this.props;
        const { email, password } = this.state;

        signinUser( { email, password } )
            .then( res => console.log( 'User signed in', res ) )
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


export default withSigninUser( Login );
