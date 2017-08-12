import React             from 'react';
import LinkFormContainer from './LinkFormContainer';
import BoardChoiceGroup  from './BoardChoiceGroup';


function LinkShareForm( { link, boards, checked, onCheck, onSubmit } )
{
    return (

        <LinkFormContainer link={ link } onSubmit={ onSubmit }>

            <h3>Boards</h3>

            <BoardChoiceGroup
                items={ boards }
                checked={ checked }
                onCheck={ onCheck } />

            <button type="submit">Share</button>

        </LinkFormContainer>

    );
}


export default LinkShareForm;
