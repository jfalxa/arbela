import { gql, graphql } from 'react-apollo';
import { allPosts }     from './allPosts';


export const createPost = gql`mutation createPost( $title: String!, $url: String!, $description: String!, $authorId: ID! )
{
    createPost( title: $title, url: $url, description: $description, authorId: $authorId )
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
            variables      : post,
            refetchQueries : [{ query: allPosts }]
        };

        return mutate( options );
    }

    return { createPost };
}


export default graphql( createPost, { props: mapProps } );
