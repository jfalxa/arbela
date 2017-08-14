import React              from 'react';
import Page               from '../generic/Page';
import BoardFormContainer from './BoardFormContainer';


function BoardCreator( { onSubmit } )
{
    return (

        <Page title="Create new board">

            <BoardFormContainer
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default BoardCreator;

