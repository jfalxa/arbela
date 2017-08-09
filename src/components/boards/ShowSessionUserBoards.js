import React                 from 'react';
import BoardList             from './BoardList';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { ownedBoards, joinedBoards, loadingBoards } )
{
    return (

        <section>

            <h2>My boards</h2>

            { loadingBoards && <p>Loading...</p> }

            <h3>Owned</h3>
            { ownedBoards && <BoardList items={ ownedBoards } /> }

            <h3>Joined</h3>
            { joinedBoards && <BoardList items={ joinedBoards } /> }

        </section>

    );
}


export default withSessionUserBoards( ShowSessionUserBoards );
