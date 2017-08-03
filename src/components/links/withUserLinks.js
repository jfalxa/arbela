import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const userLinks = gql`query userLinks( $name: String! )
{
    User(name: $name)
    {
        links( orderBy: createdAt_DESC )
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
    }
}`;


function mapProps( { data } )
{
    return { loadingLinks: data.loading, links: get( data, 'User.links' ) };
}


function mapOptions( { match } )
{
    return { variables: { name: match.params.name }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userLinks, { props: mapProps, options: mapOptions } );

