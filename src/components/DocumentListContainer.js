import { graphql }      from 'react-apollo';
import { allDocuments } from '../services/graphcool/Document';
import DocumentList     from './DocumentList';


function mapProps( { data } )
{
    return { loading: data.loading, documents: data.allDocuments };
}


export default graphql( allDocuments, { props: mapProps } )( DocumentList );

