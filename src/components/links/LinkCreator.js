import React                  from 'react';
import Page                   from '../generic/Page';
import LinkShareFormContainer from './LinkShareFormContainer';


function LinkCreator( { boards, loadingBoards, loadingUser, onCheck, onSubmit } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

    return (

        <Page>

            <h2>Post new link</h2>

            <LinkShareFormContainer
                boards={ boards }
                onSubmit={ onSubmit } />

        </Page>

    );
}


export default LinkCreator;
