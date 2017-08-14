import React                 from 'react';
import { compose }           from 'react-apollo';
import { Redirect }          from 'react-router-dom';
import Page                  from '../generic/Page';
import BoardList             from './BoardList';
import withLoader            from '../generic/withLoader';
import withUser              from '../auth/withUser';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { user, ownedBoards, joinedBoards } )
{
    if ( !user )
    {
        return <Redirect to="/" />;
    }

    return (

        <Page title="My boards">

            <h3>Owned</h3>
            <BoardList boards={ ownedBoards } />

            <h3>Joined</h3>
            <BoardList boards={ joinedBoards } />

        </Page>

    );
}


const connect = compose(
    withUser,
    withSessionUserBoards,
    withLoader( p => p.loadingUser || p.loadingBoards )
);

export default connect( ShowSessionUserBoards );
