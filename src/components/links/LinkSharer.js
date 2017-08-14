import React                  from 'react';
import Page                   from '../generic/Page';
import LinkShareFormContainer from './LinkShareFormContainer';


function LinkSharer( { link, boards, onCheck, onSubmit } )
{
    return (

        <Page title="Share link">

            <LinkShareFormContainer
                link={ link }
                boards={ boards }
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default LinkSharer;
