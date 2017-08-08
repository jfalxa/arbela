import React             from 'react';
import LinkFormContainer from '../links/LinkFormContainer';


function BoardLinkCreator( { board, loadingUser, onSubmit } )
{
    if ( loadingUser )
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
