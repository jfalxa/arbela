import { gql, graphql }  from 'react-apollo';
import get               from 'lodash/get';
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
            }
        }
    }

    ${ linkData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.Board )
    {
        return { links: { loading: true } };
    }

    const links =
    {
        data    : mapLinkAccess( data.Board.links, ownProps.user.data ),
        loading : false,
        refetch : data.refetch
    };

    return { links };
}


function mapOptions( { board, user, search } )
{
    const options =
    {
        fetchPolicy : 'cache-and-network',

        variables :
        {
            board  : board.id,
            user   : get( user, 'data.id' ),
            filter : filterSearch( search )
        }
    };

    return options;
}


export default graphql( searchLinks, { props: mapProps, options: mapOptions } );

