import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const userLinks = gql`query userLinks( $name: String! )
{
    User( name: $name )
    {
        name

        links(
            orderBy: createdAt_DESC,
            filter: { hidden: false }
        )
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
    const props =
    {
        loadingLinks: data.loading,
        user: get( data, 'User.name' ),
        links: get( data, 'User.links' )
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { name: match.params.name }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userLinks, { props: mapProps, options: mapOptions } );

