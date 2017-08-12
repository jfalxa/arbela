import React             from 'react';
import Page              from '../generic/Page';
import LinkFormContainer from './LinkFormContainer';


function LinkEditor( { link, loadingLink, loadingUser, onSubmit, onDelete } )
{
    if ( loadingUser || ( loadingLink && !link ) )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page>

            <h2>Edit link</h2>

            <LinkFormContainer
                link={ link }
                onSubmit={ onSubmit } />

            <button onClick={ onDelete }>Delete</button>

        </Page>

    );
}


export default LinkEditor;
