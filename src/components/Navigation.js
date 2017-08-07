import React    from 'react';
import { Link } from 'react-router-dom';
import UserNav  from './auth/UserNav';


function Navigation( props )
{
    return (

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new-link">Post link</Link></li>
                <li><Link to="/new-board">Create board</Link></li>
                <li><Link to="/boards">Boards</Link></li>
                <li><UserNav /></li>
            </ul>
        </nav>

    );
}


export default Navigation;
