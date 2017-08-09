import React          from 'react';
import BoardList      from './BoardList';
import withUserBoards from './withUserBoards';


function ShowUserBoards( { user, ownedBoards, joinedBoards, loadingBoards } )
{
    return (

        <section>

            <h2>{ user.name } boards</h2>

            { loadingBoards && <p>Loading...</p> }

            <h3>Owned</h3>
            { ownedBoards && <BoardList items={ ownedBoards } /> }

            <h3>Joined</h3>
            { joinedBoards && <BoardList items={ joinedBoards } /> }

        </section>

    );
}


export default withUserBoards( ShowUserBoards );
