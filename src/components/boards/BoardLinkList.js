import React        from 'react';
import { LinkCard } from '../links/LinkList';
import withList     from '../generic/withList';


export default withList( props => boardLink => (

    <LinkCard { ...boardLink.link }>
        <button onClick={ () => props.onRemoveLink( boardLink.id ) }>Remove</button>
    </LinkCard>
) );

