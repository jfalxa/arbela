import { gql, graphql }  from 'react-apollo';
import { filterSearch }  from '../../utils/linkFilter';
import { mapLinkAccess } from '../../utils/linkAccess';
import { linkData }      from './withLink';


export const searchLinks = gql`

    query searchLinks( $board: ID!, $filter: LinkFilter!, $user: ID )
    {
        Board( id: $board )
        {
            id

            links(
                orderBy: score_DESC,
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
    }

    ${ linkData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.Board )
    {
        return { loadingLinks: true };
    }

    const props =
    {
        links        : mapLinkAccess( data.Board.links, ownProps.user ),
        refetchLinks : data.refetch,
        loadingLinks : false
    };

    return props;
}


function mapOptions( { board, user, search } )
{
    const options =
    {
        fetchPolicy : 'cache-and-network',

        variables :
        {
            board  : board.id,
            user   : user && user.id,
            filter : filterSearch( search )
        }
    };

    return options;
}


export default graphql( searchLinks, { props: mapProps, options: mapOptions } );

