import React              from 'react';
import BoardFormContainer from './BoardFormContainer';


function BoardEditor( { board, loadingUser, loadingBoard, onSubmit, onDelete } )
{
    if ( loadingUser || ( loadingBoard && !board ) )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Edit board</h2>

            <BoardFormContainer
                board={ board }
                onSubmit={ onSubmit } />

            <button onClick={ onDelete }>Delete</button>

        </section>

    );
}


export default BoardEditor;

