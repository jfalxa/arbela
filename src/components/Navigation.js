import React    from 'react';
import { Link } from 'react-router-dom';


function Navigation( props )
{
    return (

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new-link">Post link</Link></li>
                <li><Link to="/new-board">Create board</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/me">My links</Link></li>
            </ul>
        </nav>

    );
}


export default Navigation;
