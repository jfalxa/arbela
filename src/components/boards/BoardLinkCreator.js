import React             from 'react';
import Page              from '../generic/Page';
import LinkFormContainer from '../links/LinkFormContainer';


function BoardLinkCreator( { board, onSubmit } )
{
    return (

        <Page title={ `Post new link to ${ board.title }` }>

            <LinkFormContainer
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default BoardLinkCreator;
