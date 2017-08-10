import React         from 'react';
import { Link }      from 'react-router-dom';
import BoardLinkList from './BoardLinkList';


function BoardLinks( { loadingBoard, board, onVote, onJoinBoard, onLeaveBoard, onDeleteLink } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { id, title, description, links } = board;

    return (

        <section>

            <h2>{ title }</h2>

            <Link to={ `/boards/${ id }/edit` }>(edit)</Link>

            <p>{ description }</p>

            <Link to={ `/boards/${ id }/members` }>Members</Link>
            <button onClick={ onJoinBoard }>Join board</button>
            <button onClick={ onLeaveBoard }>Leave board</button>

            <Link to={ `/boards/${ id }/new-link` }>Post link to { title }</Link>

            <BoardLinkList
                items={ links }
                onVote={ onVote }
                onDeleteLink={ onDeleteLink } />

        </section>

    );
}


export default BoardLinks;

