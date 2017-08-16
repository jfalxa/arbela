import React          from 'react';
import { compose }    from 'react-apollo';
import { Redirect }   from 'react-router-dom';
import withLoader     from '../generic/withLoader';
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
            .then( history.goBack )
            .catch( err => console.log( 'Failed signing in user', err ) );
    }


    render()
    {
        if ( this.props.user )
        {
            return <Redirect to="/" />;
        }

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


const connect = compose(
    withUser,
    withSigninUser,
    withLoader( p => p.loadingUser )
);


export default connect( Login );
