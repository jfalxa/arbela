import React     from 'react';
import CardAside from '../generic/CardAside';


function BoardLinkVote( { score, onVote } )
{
    return (

        <CardAside>
            <button onClick={ e => onVote( 1 ) }>+</button>
            <span>{ score || 0 }</span>
            <button onClick={ e => onVote( -1 ) }>-</button>
        </CardAside>

    );
}


export default BoardLinkVote;
