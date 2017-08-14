import React                 from 'react';
import { Redirect }          from 'react-router-dom';
import Page                  from '../generic/Page';
import BoardList             from './BoardList';
import withUser              from '../auth/withUser';
import withSessionUserBoards from './withSessionUserBoards';


function ShowSessionUserBoards( { user, ownedBoards, joinedBoards, loadingBoards } )
{
    if ( !user )
    {
        return <Redirect to="/" />;
    }

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


export default withUser( withSessionUserBoards( ShowSessionUserBoards ) );
