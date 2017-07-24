import React            from 'react';
import withRegisterUser from '../graphcool/auth/registerUser';


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

            <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                <input name="name" placeholder="name" value={ name } />
                <input name="email" placeholder="email" value={ email } />
                <input name="password" placeholder="password" value={ password } />
                <button type="submit">Register</button>
            </form>

        );
    }
}


export default withRegisterUser( UserRegister );
