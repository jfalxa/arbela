import React    from 'react';
import { Link } from 'react-router-dom';


function BoardAccessBadge( { board, access } )
{
    return (

        <aside>
            { access.isMember && '[joined]' }
            { board.closed && '[closed]' }
            { board.hidden && '[private]' }
            { access.isOwner && <Link to={ `/boards/${ board.slug }/edit` }>(edit)</Link> }
        </aside>

    );
}


export default BoardAccessBadge;
