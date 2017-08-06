import React         from 'react';
import BoardLinkList from './BoardLinkList';


function BoardLinks( { loadingBoard, board, links, onRemoveLink } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { title, description } = board;

    return (

        <section>

            <h2>{ title }</h2>

            <p>{ description }</p>

            <BoardLinkList
                items={ links }
                onRemoveLink={ onRemoveLink } />

        </section>

    );
}


export default BoardLinks;

