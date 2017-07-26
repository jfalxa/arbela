import { gql, graphql } from 'react-apollo';


export const createPost = gql`mutation createPost( $title: String!, $url: String!, $description: String!, $author: ID!, $boards: [ID!]! )
{
    createPost( title: $title, url: $url, description: $description, authorId: $author, boardsIds: $boards )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createPost = post =>
    {
        const options =
        {
            variables : post
        };

        return mutate( options );
    }

    return { createPost };
}


export default graphql( createPost, { props: mapProps } );
