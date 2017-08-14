import React             from 'react';
import Page              from '../generic/Page';
import LinkFormContainer from './LinkFormContainer';


function LinkEditor( { link, onSubmit, onDelete } )
{
    return (

        <Page title="Edit link">

            <LinkFormContainer
                link={ link }
                onSubmit={ onSubmit } />

            <button onClick={ onDelete }>Delete</button>

        </Page>

    );
}


export default LinkEditor;
