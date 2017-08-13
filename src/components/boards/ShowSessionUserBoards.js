import React                 from 'react';
import Page                  from '../generic/Page';
import BoardList             from './BoardList';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { ownedBoards, joinedBoards, loadingBoards } )
{
    return (

        <Page title="My boards">

            { loadingBoards && <p>Loading...</p> }

            <h3>Owned</h3>
            { ownedBoards && <BoardList boards={ ownedBoards } /> }

            <h3>Joined</h3>
            { joinedBoards && <BoardList boards={ joinedBoards } /> }

        </Page>

    );
}


export default withSessionUserBoards( ShowSessionUserBoards );
