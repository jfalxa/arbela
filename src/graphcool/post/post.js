import { gql, graphql } from 'react-apollo';


export const post = gql`query post( $id: ID! )
{
    Post( id: $id )
    {
        id
        title
        url
        description

        author
        {
            name
        }
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


export default graphql( post, { props: mapProps, options: mapOptions } );

