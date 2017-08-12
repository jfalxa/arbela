import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from './generic/Box';
import UserNav  from './auth/UserNav';


const Ul = Box.withComponent( 'ul' );


function Navigation( props )
{
    return (

        <nav>
            <Ul row justifySpaceAround>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/boards">Boards</Link></li>
                <li><Link to="/new-board">Create board</Link></li>
                <li><Link to="/new-link">Post link</Link></li>
                <li><UserNav /></li>
            </Ul>
        </nav>

    );
}


export default Navigation;
