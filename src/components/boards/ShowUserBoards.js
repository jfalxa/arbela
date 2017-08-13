import React          from 'react';
import Page           from '../generic/Page';
import BoardList      from './BoardList';
import withUserBoards from './withUserBoards';


function ShowUserBoards( { user, ownedBoards, joinedBoards, loadingBoards } )
{
    return (

        <Page>

            <h2>{ user.name }'s boards</h2>

            { loadingBoards && <p>Loading...</p> }

            <h3>Owned</h3>
            { ownedBoards && <BoardList boards={ ownedBoards } /> }

            <h3>Joined</h3>
            { joinedBoards && <BoardList boards={ joinedBoards } /> }

        </Page>

    );
}


export default withUserBoards( ShowUserBoards );
