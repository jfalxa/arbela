import React  from 'react';
import styled from 'styled-components';


const Aside = styled.aside`

    display: inline;
    font-size: 0.8em;

`;


const Upvote = styled.span.attrs( { children: '▲' } )`

    margin-right: 3px;
    color: ${ p => p.locked ? '#CCC' : 'initial' };
    cursor: pointer;
    pointer-events: ${ p => p.locked ? 'none' : 'initial' };

`;


function LinkVote( { score, locked, onVote } )
{
    return (

        <Aside>
            <Upvote locked={ locked } onClick={ e => onVote( 1 ) } />
            <span>{ score || 0 } points</span>
        </Aside>

    );
}


export default LinkVote;
