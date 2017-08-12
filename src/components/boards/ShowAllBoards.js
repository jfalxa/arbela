import React         from 'react';
import Page          from '../generic/Page';
import BoardList     from './BoardList';
import withAllBoards from './withAllBoards';


function FeedBoards( { loadingBoards, boards } )
{
    return (

        <Page>

            <h2>All boards</h2>

            { boards && <BoardList items={ boards } /> }
            { loadingBoards && <p>Loading...</p> }

        </Page>

    );
}


export default withAllBoards( FeedBoards );
