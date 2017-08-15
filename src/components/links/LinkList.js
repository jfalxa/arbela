import React    from 'react';
import CardList from '../generic/CardList';
import LinkCard from './LinkCard';


function LinkList( { links, access, refetchLinks, onVote } )
{
    return (

        <CardList>

            { links.map( link => (

                <LinkCard { ...link }
                    key={ link.id }
                    access={ { ...access, ...link.access } }
                    onVote={ vote => onVote( link, vote, refetchLinks ) } />

            ) ) }

        </CardList>

    )
}


export default LinkList;
