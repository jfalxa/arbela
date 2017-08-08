import React         from 'react';
import { Link }      from 'react-router-dom';
import BoardLinkList from './BoardLinkList';


function BoardLinks( { loadingBoard, board, onVote, onJoinBoard, onRemoveLink } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { id, title, description, links } = board;

    return (

        <section>

            <h2>{ title }</h2>

            <p>{ description }</p>

            <button onClick={ onJoinBoard }>Join board</button>

            <Link to={ `/boards/${ id }/new-link` }>Post link to { title }</Link>

            <BoardLinkList
                items={ links }
                onVote={ onVote }
                onRemoveLink={ onRemoveLink } />

        </section>

    );
}


export default BoardLinks;

