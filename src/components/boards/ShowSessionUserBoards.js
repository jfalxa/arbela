import React                 from 'react';
import Page                  from '../generic/Page';
import BoardList             from './BoardList';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { ownedBoards, joinedBoards, loadingBoards } )
{
    return (

        <Page>

            <h2>My boards</h2>

            { loadingBoards && <p>Loading...</p> }

            <h3>Owned</h3>
            { ownedBoards && <BoardList items={ ownedBoards } /> }

            <h3>Joined</h3>
            { joinedBoards && <BoardList items={ joinedBoards } /> }

        </Page>

    );
}


export default withSessionUserBoards( ShowSessionUserBoards );
