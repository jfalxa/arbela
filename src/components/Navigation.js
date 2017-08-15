import React      from 'react';
import { Link }   from 'react-router-dom';
import Box        from './generic/Box';
import LogoutUser from './auth/LogoutUser';
import withUser   from './auth/withUser';


const Ul = Box.withComponent( 'ul' ).extend`

    padding: 0 50px;

`;


function LoggedInLinks( { user } )
{
    return (

        <li>
            <Link to={ `/users/${ user.name }` }>{ user.name }</Link>
            <LogoutUser />
        </li>

    );
}


function LoggedOutLinks()
{
    return (

        <li>
            <Link to="/login">Login</Link>
            /
            <Link to="/register">Register</Link>
        </li>

    );
}


function Navigation( { user, loadingUser } )
{
    return (

        <nav>
            <Ul row justify="space-between">
                <li><Link to="/">Home</Link></li>
                { user && <li><Link to="/new-board">Create board</Link></li> }
                { user && <li><Link to="/new-link">Post link</Link></li> }
                { user ? <LoggedInLinks user={ user } /> : <LoggedOutLinks /> }
            </Ul>
        </nav>

    );
}


export default withUser( Navigation );
