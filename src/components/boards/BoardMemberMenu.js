import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from '../generic/Box';
import { hasAccess, canJoin, canLeave } from '../../utils/boardAccess';


const Aside = Box.withComponent( 'aside' ).extend`

    margin-bottom: 25px;

    & > *
    {
        margin: 0 5px;
    }

`;


function BoardMemberMenu( { slug, closed, access, onJoinBoard, onLeaveBoard } )
{
    return (

        <Aside>
            { hasAccess( access ) && <Link to={ `/boards/${ slug }/members` }>Members</Link> }
            { !closed && canJoin( access ) && <button onClick={ onJoinBoard }>Join board</button> }
            { canLeave( access ) && <button onClick={ onLeaveBoard }>Leave board</button> }
        </Aside>

    );
}


export default BoardMemberMenu;
