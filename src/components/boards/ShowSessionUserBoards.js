import React                 from 'react';
import { Redirect }          from 'react-router-dom';
import Page                  from '../generic/Page';
import BoardList             from './BoardList';
import withUser              from '../auth/withUser';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { user, ownedBoards, joinedBoards, loadingUser, loadingBoards } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

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


export default withUser( withSessionUserBoards( ShowSessionUserBoards ) );
