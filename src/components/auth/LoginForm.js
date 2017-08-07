import React    from 'react';
import { Link } from 'react-router-dom';


function LoginForm( { email, password, onChange, onSubmit } )
{
    return (

        <section>

            <h2>Login</h2>

            <form onSubmit={ onSubmit }>

                <label htmlFor="user-email">Email address</label>
                <input id="user-email" name="email" value={ email } onChange={ onChange } />

                <label htmlFor="user-password">Password</label>
                <input id="user-password" name="password" value={ password } onChange={ onChange } />

                <button type="submit">Login</button>

            </form>

            <Link to="/register">Register</Link>

        </section>

    );
}


export default LoginForm;
