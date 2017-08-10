import { gql, graphql } from 'react-apollo';


export const createLink = gql`mutation createLink( $title: String!, $url: String!, $description: String!, $author: ID!, $board: ID! )
{
    createLink( title: $title, url: $url, description: $description, score: 0, authorId: $author, boardId: $board )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createLink = ( link, authorID, boardID ) =>
    {
        const options =
        {
            variables: { ...link, author: authorID, board: boardID }
        };

        return mutate( options )
            .then( res => res.data.createLink );
    }

    return { createLink };
}


export default graphql( createLink, { props: mapProps } );
