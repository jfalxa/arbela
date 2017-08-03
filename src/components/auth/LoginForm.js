import React from 'react';


function LoginForm( { email, password, onChange, onSubmit } )
{
    return (

        <form onChange={ onChange } onSubmit={ onSubmit }>

            <label htmlFor="user-email">Email address</label>
            <input id="user-email" name="email" value={ email } />

            <label htmlFor="user-password">Password</label>
            <input id="user-password" name="password" value={ password } />

            <button type="submit">Login</button>

        </form>

    );
}


export default LoginForm;
