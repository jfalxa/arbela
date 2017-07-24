import React      from 'react';
import { Link }   from 'react-router-dom';
import withUser   from '../graphcool/auth/user';
import logoutUser from '../graphcool/auth/logoutUser';


function UserLink( { user } )
{
    if ( !user )
    {
        return (

            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>

        );
    }

    return (

        <nav>
            <Link to={ `/users/${ user.name }` }>{ user.name }</Link>
            <Link to="/" onClick={ logoutUser }>Logout</Link>
        </nav>

    );

}


export default withUser( UserLink );
