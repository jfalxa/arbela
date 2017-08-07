import React      from 'react';
import { Link }   from 'react-router-dom';
import LogoutUser from './LogoutUser';
import withUser   from './withUser';


function LoggedInNav( { user } )
{
    return (

        <nav>
            <Link to={ `/users/${ user.name }` }>{ user.name }</Link>
            <LogoutUser />
        </nav>

    );
}


function LoggedOutNav()
{
    return (

        <nav>
            <Link to="/login">Login</Link>
            /
            <Link to="/register">Register</Link>
        </nav>

    );
}


function UserNav( { loadingUser, user } )
{
    if ( loadingUser )
    {
        return <p>Loading...</p>;
    }

    return user
        ? <LoggedInNav user={ user } />
        : <LoggedOutNav />;
}


export default withUser( UserNav );
