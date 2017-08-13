import React    from 'react';
import CardList from '../generic/CardList';
import LinkCard from './LinkCard';


function LinkList( { links, onVote } )
{
    return (

        <CardList>

            { links.map( link => (

                <LinkCard { ...link }
                    key={ link.id }
                    onVote={ vote => onVote( link, vote ) } />

            ) ) }

        </CardList>

    )
}


export default LinkList;
