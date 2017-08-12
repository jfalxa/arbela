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

        <Page>

            <h2>Create new board</h2>

            <BoardFormContainer
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default BoardCreator;

