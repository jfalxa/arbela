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


function hasAccess( access )
{
    return ( access.isOwner || access.isMember );
}


function canJoin( access, board )
{
    return ( access.isAuth && !hasAccess( access ) );
}


function canLeave( access )
{
    return ( access.isAuth && access.isMember );
}


function BoardMemberMenu( { board, access, onJoinBoard, onLeaveBoard } )
{
    return (

        <Aside>
            { hasAccess( access ) && <Link to={ `/boards/${ board.slug }/members` }>Members</Link> }
            { !board.closed && canJoin( access, board ) && <button onClick={ onJoinBoard }>Join board</button> }
            { canLeave( access ) && <button onClick={ onLeaveBoard }>Leave board</button> }
        </Aside>

    );
}


export default BoardMemberMenu;
