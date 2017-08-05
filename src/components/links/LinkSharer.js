import React            from 'react';
import BoardChoiceGroup from './BoardChoiceGroup';


function LinkSharer( { link, boards, checked, loadingLink, loadingBoards, onCheck, onSubmit } )
{
    if ( ( loadingLink && !link ) || ( loadingBoards && !boards ) )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>Share "{ link.title }"</h2>

            <form onSubmit={ onSubmit }>

                <BoardChoiceGroup
                    items={ boards }
                    checked={ checked }
                    onCheck={ onCheck } />

                <button type="submit">Share</button>

            </form>

        </section>

    );
}


export default LinkSharer;
