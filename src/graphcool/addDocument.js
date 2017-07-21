import { gql, graphql } from 'react-apollo';
import { allDocuments } from './allDocuments';


export const addDocument = gql`mutation addDocument( $title: String!, $url: String!, $description: String! )
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
    const addDocument = document =>
    {
        const options =
        {
            variables      : document,
            refetchQueries : [{ query: allDocuments }]
        };

        return mutate( options );
    }

    return { addDocument };
}


export default graphql( addDocument, { props: mapProps } );
