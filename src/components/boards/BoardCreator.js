import React              from 'react';
import Page               from '../generic/Page';
import BoardFormContainer from './BoardFormContainer';


function BoardCreator( { loadingUser, onSubmit } )
{
    if ( loadingUser )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page title="Create new board">

            <BoardFormContainer
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default BoardCreator;

