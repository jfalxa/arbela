import React from 'react';


function BoardLinkVote( { score, onVote } )
{
    return (

        <div>
            <button onClick={ e => onVote( -1 ) }>-</button>
            <span>{ score || 0 }</span>
            <button onClick={ e => onVote( 1 ) }>+</button>
        </div>

    );
}


export default BoardLinkVote;
