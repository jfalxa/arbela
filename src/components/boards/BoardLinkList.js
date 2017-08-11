import React         from 'react';
import { LinkCard }  from '../links/LinkList';
import BoardLinkVote from './BoardLinkVote';
import withList      from '../generic/withList';


export default withList( props => link => (

    <LinkCard { ...link }>

        <button onClick={ () => props.onDeleteLink( link.id ) }>
            Remove
        </button>

        <BoardLinkVote
            score={ link.score }
            onVote={ vote => props.onVote( link, vote ) } />

    </LinkCard>

) );

