import React             from 'react';
import LinkFormContainer from './LinkFormContainer';


function LinkCreator( { loadingUser, onSubmit } )
{
    if ( loadingUser )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Post new link</h2>

            <LinkFormContainer
                onSubmit={ onSubmit } />

        </section>

    );
}


export default LinkCreator;
