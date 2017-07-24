import React      from 'react';
import { Link }   from 'react-router-dom';
import withUser   from '../../graphcool/auth/user';
import logoutUser from '../../graphcool/auth/logoutUser';


function LoggedInLink( { user } )
{
    return (

        <nav>
            <Link to={ `/users/${ user.name }` }>{ user.name }</Link>
            <Link to="/" onClick={ logoutUser }>Logout</Link>
        </nav>

    );
}


function LoggedOutLink()
{
    return (

        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>

    );
}


function UserLink( { user } )
{
    return user
        ? <LoggedInLink user={ user } />
        : <LoggedOutLink />;
}


export default withUser( UserLink );
