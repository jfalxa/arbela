import { gql, graphql } from 'react-apollo';


export const deletePost = gql`mutation deletePost( $id: ID! )
{
    deletePost( id: $id )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const deletePost = postID =>
    {
        const options =
        {
            variables : { id: postID }
        };

        return mutate( options );
    }

    return { deletePost };
}


export default graphql( deletePost, { props: mapProps } );
