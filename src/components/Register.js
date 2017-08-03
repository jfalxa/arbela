import React from 'react';


class Register extends React.Component
{
    render()
    {
        return (

            <form>

                <label htmlFor="user-name">User name</label>
                <input id="user-name" name="name" />

                <label htmlFor="user-email">Email address</label>
                <input id="user-email" name="email" />

                <label htmlFor="user-password">Password</label>
                <input id="user-password" name="password" />

                <button type="submit">Register</button>

            </form>

        );
    }
}


export default Register;
