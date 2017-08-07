import React          from 'react';
import RegisterForm   from './RegisterForm';
import withUser       from './withUser';
import withCreateUser from './withCreateUser';
import withSigninUser from './withSigninUser';


class Register extends React.Component
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
        const { name, email, password }                        = this.state;

        createUser( { name, email, password } )
            .then( res => console.log( 'User created', res ) )
            .then( () => signinUser( { email, password } ) )
            .then( () => console.log( 'User logged in' ) )
            .then( refetchUser )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed creating user', err ) );
    }


    render()
    {
        const { name, email, password } = this.state;

        return (

            <RegisterForm
                name={ name }
                email={ email }
                password={ password }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withCreateUser( withSigninUser( Register ) ) );
