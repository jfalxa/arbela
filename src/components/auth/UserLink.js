import React      from 'react';
import NavBox     from '../utilities/NavBox';
import NavLink    from '../utilities/NavLink';
import withUser   from '../../graphcool/auth/user';
import logoutUser from '../../graphcool/auth/logoutUser';


function LoggedInLink( { user } )
{
    return (

        <NavBox>
            <NavLink to={ `/users/${ user.name }` }>{ user.name }</NavLink>
            <NavLink to="/" onClick={ logoutUser }>Logout</NavLink>
        </NavBox>

    );
}


function LoggedOutLink()
{
    return (

        <NavBox>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </NavBox>

    );
}


function UserLink( { user } )
{
    return user
        ? <LoggedInLink user={ user } />
        : <LoggedOutLink />;
}


export default withUser( UserLink );
