import React              from 'react';
import Page               from '../generic/Page';
import BoardFormContainer from './BoardFormContainer';


function BoardEditor( { board, loadingUser, loadingBoard, onSubmit, onDelete } )
{
    if ( loadingUser || ( loadingBoard && !board ) )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page title="Edit board">

            <BoardFormContainer
                board={ board }
                onSubmit={ onSubmit } />

            <button onClick={ onDelete }>Delete</button>

        </Page>

    );
}


export default BoardEditor;

