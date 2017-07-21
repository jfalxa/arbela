import { gql, graphql } from 'react-apollo';


export const updateDocument = gql`mutation updateDocument( $title: String!, $url: String!, $description: String! )
{
    updateDocument( title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { mutate } )
{
    const updateDocument = document =>
    {
        const options =
        {
            variables : document,
        };

        return mutate( options );
    }

    return { updateDocument };
}


export default graphql( updateDocument, { props: mapProps } );
