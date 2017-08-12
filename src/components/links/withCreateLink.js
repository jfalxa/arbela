import { gql, graphql } from 'react-apollo';


export const createLink = gql`mutation createLink( $title: String!, $url: String!, $description: String!, $author: ID!, $board: ID!, $trail: ID )
{
    createLink( title: $title, url: $url, description: $description, score: 0, authorId: $author, boardId: $board, trailId: $trail )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createLink = ( link, authorID, boardID, trailID ) =>
    {
        const options =
        {
            variables :
            {
                ...link,

                author : authorID,
                board  : boardID,
                trail  : trailID
            }
        };

        return mutate( options )
            .then( res => res.data.createLink );
    }

    return { createLink };
}


export default graphql( createLink, { props: mapProps } );
