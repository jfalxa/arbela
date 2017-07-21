import { gql, graphql } from 'react-apollo';
import { allDocuments } from './allDocuments';


export const createDocument = gql`mutation createDocument( $title: String!, $url: String!, $description: String! )
{
    createDocument( title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { mutate } )
{
    const createDocument = document =>
    {
        const options =
        {
            variables      : document,
            refetchQueries : [{ query: allDocuments }]
        };

        return mutate( options );
    }

    return { createDocument };
}


export default graphql( createDocument, { props: mapProps } );
