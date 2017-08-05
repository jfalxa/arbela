import React          from 'react';
import RegisterForm   from './RegisterForm';
import withCreateUser from './withCreateUser';


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

        const { createUser, history }   = this.props;
        const { name, email, password } = this.state;

        createUser( { name, email, password } )
            .then( res => console.log( 'User created', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed creating user', err ) );
    }


    render()
    {
        const { name, email, password } = this.state;

        return (

            <section>

                <h2>Register</h2>

                <RegisterForm
                    name={ name }
                    email={ email }
                    password={ password }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

            </section>

        );
    }
}


export default withCreateUser( Register );
