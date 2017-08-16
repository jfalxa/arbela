import React    from 'react';
import CardList from '../generic/CardList';
import LinkCard from './LinkCard';


function LinkList( { links, access, onVote } )
{
    return (

        <CardList>

            { links.map( link => (

                <LinkCard { ...link }
                    key={ link.id }
                    access={ { ...access, ...link.access } }
                    onVote={ vote => onVote( link, vote ) } />

            ) ) }

        </CardList>

    )
}


export default LinkList;
