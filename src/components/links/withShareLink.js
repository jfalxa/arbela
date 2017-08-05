import { gql, graphql } from 'react-apollo';


export const shareLink = gql`mutation shareLink( $id: ID!, $title: String!, $boards: [ID!] )
{
    updateLink( id: $id, title: $title, boardsIds: $boards )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const shareLink = link =>
    {
        const options =
        {
            variables : link
        };

        return mutate( options );
    }

    return { shareLink };
}


export default graphql( shareLink, { props: mapProps } );
