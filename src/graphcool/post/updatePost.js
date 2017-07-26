import { gql, graphql } from 'react-apollo';


export const updatePost = gql`mutation updatePost( $id: ID!, $title: String!, $url: String!, $description: String!, $boards: [ID!] )
{
    updatePost( id: $id, title: $title, url: $url, description: $description, boardsIds: $boards )
    {
        id
        title
        url
        description

        boards
        {
            id
        }
    }
}`;


function mapProps( { ownProps, mutate } )
{
    const updatePost = post =>
    {
        const options =
        {
            variables : post
        };

        return mutate( options );
    }

    return { updatePost };
}


export default graphql( updatePost, { props: mapProps } );
