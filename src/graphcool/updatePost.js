import { gql, graphql } from 'react-apollo';


export const updatePost = gql`mutation updatePost( $id: ID!, $title: String!, $url: String!, $description: String! )
{
    updatePost( id: $id, title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
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
