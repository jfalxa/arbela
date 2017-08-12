import React    from 'react';
import Box      from '../generic/Box';
import LinkCard from './LinkCard';


const Ul = Box.withComponent( 'ul' );


function LinkList( { links, onVote, onDeleteLink } )
{
    return (

        <Ul column align="stretch" alignSelf="stretch">

            { links.map( link => (

                <LinkCard { ...link }
                    key={ link.id }
                    onVote={ vote => onVote( link, vote ) }
                    onDeleteLink={ () => onDeleteLink( link.id ) } />

            ) ) }

        </Ul>

    )
}


export default LinkList;
