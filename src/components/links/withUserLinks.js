import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const userLinks = gql`query userLinks( $name: String! )
{
    User( name: $name )
    {
        id
        name

        links(
            orderBy: createdAt_DESC,
            filter:
            {
                board:
                {
                    hidden: false
                }
            }
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

            board
            {
                id
                title
            }
        }
    }
}`;


function mapProps( { data } )
{
    const props =
    {
        loadingLinks : data.loading,
        user         : get( data, 'User.name' ),
        links        : get( data, 'User.links' )
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { name: match.params.name }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userLinks, { props: mapProps, options: mapOptions } );

