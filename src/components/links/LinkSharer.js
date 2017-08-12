import React                  from 'react';
import LinkShareFormContainer from './LinkShareFormContainer';


function LinkSharer( { link, boards, loadingBoards, loadingUser, onCheck, onSubmit } )
{
    if ( loadingUser || loadingBoards )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Share link</h2>

            <LinkShareFormContainer
                link={ link }
                boards={ boards }
                onSubmit={ onSubmit } />

        </section>

    );
}


export default LinkSharer;
