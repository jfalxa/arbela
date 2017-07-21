import { graphql }                   from 'react-apollo';
import { addDocument, allDocuments } from '../services/graphcool/Document';
import DocumentForm                  from './DocumentForm';


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


export default graphql( addDocument, { props: mapProps } )( DocumentForm );
