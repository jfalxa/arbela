import React         from 'react';
import { LinkCard }  from '../links/LinkList';
import BoardLinkVote from './BoardLinkVote';
import withList      from '../generic/withList';


export default withList( props => boardLink => (

    <LinkCard { ...boardLink.link }>

        <button onClick={ () => props.onRemoveLink( boardLink.id ) }>
            Remove
        </button>

        <BoardLinkVote
            score={ boardLink.score }
            onVote={ vote => props.onVote( boardLink, vote ) } />

    </LinkCard>

) );

