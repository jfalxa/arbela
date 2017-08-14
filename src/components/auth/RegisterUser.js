import React          from 'react';
import { compose }    from 'react-apollo';
import { Redirect }   from 'react-router-dom';
import RegisterForm   from './RegisterForm';
import withLoader     from '../generic/withLoader';
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
        if ( this.props.user )
        {
            return <Redirect to="/" />;
        }

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


const connect = compose(
    withUser,
    withCreateUser,
    withSigninUser,
    withLoader( p => p.loadingUser )
);


export default connect( Register );
