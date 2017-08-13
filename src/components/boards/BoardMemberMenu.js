import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from '../generic/Box';


function BoardMemberMenu( { board, onJoinBoard, onLeaveBoard } )
{
    return (

        <Box row>
            <Link to={ `/boards/${ board }/members` }>Members</Link>
            <button onClick={ onJoinBoard }>Join board</button>
            <button onClick={ onLeaveBoard }>Leave board</button>
        </Box>

    );
}


export default BoardMemberMenu;
