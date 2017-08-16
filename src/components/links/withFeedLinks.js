import { gql, graphql }  from 'react-apollo';
import get               from 'lodash/get';
import { filterUser }    from '../../utils/boardFilter';
import { mapLinkAccess } from '../../utils/linkAccess';
import { linkData }      from './withLink';


export const feedLinks = gql`

    query feedLinks( $filter: LinkFilter!, $user: ID )
    {
        allLinks(
            orderBy: updatedAt_DESC,
            filter: $filter
        )
        {
            ...LinkData

            _votersMeta( filter: { id: $user } )
            {
                count
            }
        }
    }

    ${ linkData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.allLinks )
    {
        return { links: { loading: true } };
    }

    const links =
    {
        data    : mapLinkAccess( data.allLinks, ownProps.user.data ),
        loading : false,
        refetch : data.refetch
    };

    return { links };
}


function mapOptions( { user, search } )
{
    const options =
    {
        fetchPolicy : 'cache-and-network',

        variables :
        {
            user   : get( user, 'data.id' ),
            filter : { board: filterUser( user.data ) }
        }
    };

    return options;
}


export default graphql( feedLinks, { props: mapProps, options: mapOptions } );

