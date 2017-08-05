import React          from 'react';
import LinkList       from '../links/LinkList';
import withBoardLinks from './withBoardLinks';


function BoardLinks( { loadingBoard, board } )
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

            <LinkList items={ links } />

        </section>

    );
}


export default withBoardLinks( BoardLinks );
