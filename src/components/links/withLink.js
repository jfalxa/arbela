import { gql, graphql } from 'react-apollo';


export const link = gql`query link( $id: ID! )
{
    Link( id: $id )
    {
        id
        title
        url
        description
        hidden

        author
        {
            name
        }
    }
}`;


function mapProps( { data } )
{
    return { loadingLink: data.loading, link: data.Link };
}


function mapOptions( { id, match } )
{
    return { variables: { id: id || match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( link, { props: mapProps, options: mapOptions } );

