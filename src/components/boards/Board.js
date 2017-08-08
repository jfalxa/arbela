import React         from 'react';
import BoardLinkList from './BoardLinkList';


function BoardLinks( { loadingBoard, board, onVote, onRemoveLink } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { title, description, links } = board;

    return (

        <section>

            <h2>{ title }</h2>

            <p>{ description }</p>

            <BoardLinkList
                items={ links }
                onVote={ onVote }
                onRemoveLink={ onRemoveLink } />

        </section>

    );
}


export default BoardLinks;

