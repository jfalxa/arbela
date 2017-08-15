import React     from 'react';
import CardAside from '../generic/CardAside';


function BoardLinkVote( { score, locked, onVote } )
{
    return (

        <CardAside>
            { !locked && <button onClick={ e => onVote( 1 ) }>+</button> }
            <span>{ score || 0 }</span>
            { !locked && <button onClick={ e => onVote( -1 ) }>-</button> }
        </CardAside>

    );
}


export default BoardLinkVote;
