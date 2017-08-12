import React             from 'react';
import Page              from '../generic/Page';
import LinkFormContainer from '../links/LinkFormContainer';


function BoardLinkCreator( { board, loadingBoard, loadingUser, onSubmit } )
{
    if ( loadingBoard || loadingUser )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page>

            <h2>Post new link to { board.title }</h2>

            <LinkFormContainer
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default BoardLinkCreator;
