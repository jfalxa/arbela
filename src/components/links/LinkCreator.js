import React               from 'react';
import LinkSharerContainer from './LinkSharerContainer';


function LinkCreator( { boards, loadingBoards, loadingUser, onCheck, onSubmit } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Post new link</h2>

            <LinkSharerContainer
                boards={ boards }
                onSubmit={ onSubmit } />

        </section>

    );
}


export default LinkCreator;
