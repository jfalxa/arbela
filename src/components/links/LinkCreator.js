import React                  from 'react';
import Page                   from '../generic/Page';
import LinkShareFormContainer from './LinkShareFormContainer';


function LinkCreator( { boards, onCheck, onSubmit } )
{
    return (

        <Page title="Post new link">

            <LinkShareFormContainer
                boards={ boards }
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default LinkCreator;
