import React                  from 'react';
import Page                   from '../generic/Page';
import LinkShareFormContainer from './LinkShareFormContainer';


function LinkSharer( { link, boards, loadingBoards, loadingUser, onCheck, onSubmit } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

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
