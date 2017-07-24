import { gql, graphql } from 'react-apollo';


export const readPost = gql`query readPost( $id: ID! )
{
    Post( id: $id )
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, post: data.Post };
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id } };
}


export default graphql( readPost, { props: mapProps, options: mapOptions } );

