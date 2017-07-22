import { gql, graphql } from 'react-apollo';


export const updateDocument = gql`mutation updateDocument( $id: ID!, $title: String!, $url: String!, $description: String! )
{
    updateDocument( id: $id, title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { ownProps, mutate } )
{
    const updateDocument = document =>
    {
        const options =
        {
            variables : document
        };

        return mutate( options );
    }

    return { updateDocument };
}


export default graphql( updateDocument, { props: mapProps } );
