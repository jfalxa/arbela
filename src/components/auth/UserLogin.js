import React         from 'react';
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

            <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                <input name="email" placeholder="email" value={ email } />
                <input name="password" placeholder="password" value={ password } />
                <button type="submit">Login</button>
            </form>

        );
    }
}


export default withLoginUser( UserLogin );
