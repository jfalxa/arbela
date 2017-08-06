import React              from 'react';
import BoardFormContainer from './BoardFormContainer';


function BoardCreator( { loadingUser, onSubmit } )
{
    if ( loadingUser )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Create new board</h2>

            <BoardFormContainer
                onSubmit={ onSubmit } />

        </section>

    );
}


export default BoardCreator;

