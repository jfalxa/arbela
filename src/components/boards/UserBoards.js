import React     from 'react';
import Page      from '../generic/Page';
import BoardList from './BoardList';


function UserBoards( { owner, ownedBoards, joinedBoards } )
{
    return (

        <Page title={ `${ owner.name }'s boards` }>

            <h3>Owned</h3>
            <BoardList boards={ ownedBoards } />

            <h3>Joined</h3>
            <BoardList boards={ joinedBoards } />

        </Page>

    );
}


export default UserBoards;
