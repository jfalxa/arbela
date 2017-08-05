import React        from 'react';
import { LinkCard } from '../links/LinkList';
import withList     from '../generic/withList';


export default withList( props => board => (

    <LinkCard { ...board }>
        <button onClick={ () => props.onRemoveLink( board.id ) }>Remove</button>
    </LinkCard>
) );

