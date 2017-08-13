import React          from 'react';
import Page           from '../generic/Page';
import BoardList      from './BoardList';
import withUserBoards from './withUserBoards';


function ShowUserBoards( { user, ownedBoards, joinedBoards, loadingBoards } )
{
    if ( loadingBoards )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page title={ `${ user.name }'s boards` }>

            <h3>Owned</h3>
            <BoardList boards={ ownedBoards } />

            <h3>Joined</h3>
            <BoardList boards={ joinedBoards } />

        </Page>

    );
}


export default withUserBoards( ShowUserBoards );
