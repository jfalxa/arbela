import { gql, graphql } from 'react-apollo';
import { allDocuments } from './allDocuments';


export const deleteDocument = gql`mutation deleteDocument( $id: ID! )
{
    deleteDocument( id: $id )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const deleteDocument = documentID =>
    {
        const options =
        {
            variables      : { id: documentID },
            refetchQueries : [{ query: allDocuments }]
        };

        return mutate( options );
    }

    return { deleteDocument };
}


export default graphql( deleteDocument, { props: mapProps } );
