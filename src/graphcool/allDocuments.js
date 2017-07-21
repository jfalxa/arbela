import { gql, graphql } from 'react-apollo';


export const allDocuments = gql`query allDocuments
{
    allDocuments(orderBy: createdAt_DESC)
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, documents: data.allDocuments };
}


export default graphql( allDocuments, { props: mapProps } );

