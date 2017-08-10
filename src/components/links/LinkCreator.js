import React             from 'react';
import LinkFormContainer from './LinkFormContainer';
import BoardChoiceGroup  from './BoardChoiceGroup';


function LinkCreator( { checked, boards, loadingBoards, loadingUser, onCheck, onSubmit } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Post new link</h2>

            <LinkFormContainer
                onSubmit={ onSubmit } />

            <BoardChoiceGroup
                items={ boards }
                checked={ checked }
                onCheck={ onCheck } />

        </section>

    );
}


export default LinkCreator;
