import React             from 'react';
import LinkFormContainer from '../links/LinkFormContainer';


function BoardLinkCreator( { board, loadingBoard, loadingUser, onSubmit } )
{
    if ( loadingBoard || loadingUser )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Post new link to { board.title }</h2>

            <LinkFormContainer
                onSubmit={ onSubmit } />

        </section>

    );
}


export default BoardLinkCreator;
