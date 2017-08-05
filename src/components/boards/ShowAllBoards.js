import React         from 'react';
import BoardList     from './BoardList';
import withAllBoards from './withAllBoards';


function FeedBoards( { loadingBoards, boards } )
{
    return (

        <section>

            <h2>All boards</h2>

            { boards && <BoardList items={ boards } /> }
            { loadingBoards && <p>Loading...</p> }

        </section>

    );
}


export default withAllBoards( FeedBoards );
