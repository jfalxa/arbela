import React from 'react';
import Box   from '../generic/Box';


const Aside = Box.withComponent( 'aside' );


function BoardLinkVote( { score, onVote } )
{
    return (

        <Aside column justify="center" align="center">
            <button onClick={ e => onVote( 1 ) }>+</button>
            <span>{ score || 0 }</span>
            <button onClick={ e => onVote( -1 ) }>-</button>
        </Aside>

    );
}


export default BoardLinkVote;
