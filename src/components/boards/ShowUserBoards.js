import React          from 'react';
import { compose }    from 'react-apollo';
import Page           from '../generic/Page';
import BoardList      from './BoardList';
import withUser       from '../auth/withUser';
import withLoader     from '../generic/withLoader';
import withUserBoards from './withUserBoards';


function ShowUserBoards( { user, ownedBoards, joinedBoards } )
{
    return (

        <Page title={ `${ user.name }'s boards` }>

            <h3>Owned</h3>
            <BoardList boards={ ownedBoards } />

            <h3>Joined</h3>
            <BoardList boards={ joinedBoards } />

        </Page>

    );
}


const connect = compose(
    withUser,
    withUserBoards,
    withLoader( p => p.loadingBoards )
);


export default connect( ShowUserBoards );
