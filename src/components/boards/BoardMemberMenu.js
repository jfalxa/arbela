import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from '../generic/Box';


const Aside = Box.withComponent( 'aside' ).extend`

    margin-bottom: 25px;

    & > *
    {
        margin: 0 5px;
    }

`;


function BoardMemberMenu( { board, onJoinBoard, onLeaveBoard } )
{
    return (

        <Aside>
            <Link to={ `/boards/${ board }/members` }>Members</Link>
            <button onClick={ onJoinBoard }>Join board</button>
            <button onClick={ onLeaveBoard }>Leave board</button>
        </Aside>

    );
}


export default BoardMemberMenu;
