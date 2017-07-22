import { gql, graphql } from 'react-apollo';


export const readDocument = gql`query readDocument( $id: ID! )
{
    Document( id: $id )
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, document: data.Document };
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id } };
}


export default graphql( readDocument, { props: mapProps, options: mapOptions } );

