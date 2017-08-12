import React             from 'react';
import LinkFormContainer from './LinkFormContainer';
import BoardChoiceGroup  from './BoardChoiceGroup';


function LinkShareForm( { link, boards, checked, onCheck, onSubmit } )
{
    return (

        <LinkFormContainer link={ link } onSubmit={ onSubmit }>

            <BoardChoiceGroup
                items={ boards }
                checked={ checked }
                onCheck={ onCheck } />

            <button type="submit">Post</button>

        </LinkFormContainer>

    );
}


export default LinkShareForm;
