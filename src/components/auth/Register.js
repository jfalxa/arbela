import React          from 'react';
import RegisterForm   from './RegisterForm';
import withCreateUser from './createUser';


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

        const { createUser }            = this.props;
        const { name, email, password } = this.state;

        createUser( { name, email, password } )
            .then( res => console.log( 'User created', res ) )
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


export default withCreateUser( Register );
