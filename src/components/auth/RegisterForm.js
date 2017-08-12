import React    from 'react';
import { Link } from 'react-router-dom';
import Page     from '../generic/Page';


function RegisterForm( { name, email, password, onChange, onSubmit } )
{
    return (

        <Page>

            <h2>Register</h2>

            <form onSubmit={ onSubmit }>

                <label htmlFor="user-name">User name</label>
                <input id="user-name" name="name" value={ name } onChange={ onChange } />

                <label htmlFor="user-email">Email address</label>
                <input id="user-email" name="email" value={ email } onChange={ onChange } />

                <label htmlFor="user-password">Password</label>
                <input id="user-password" name="password" value={ password } onChange={ onChange } />

                <button type="submit">Register</button>

            </form>

            <Link to="/login">Login</Link>

        </Page>

    );
}


export default RegisterForm;
