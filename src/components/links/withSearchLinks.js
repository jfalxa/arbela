import { gql, graphql }  from 'react-apollo';
import { filterSearch }  from '../../utils/linkFilter';
import { mapLinkAccess } from '../../utils/linkAccess';
import { linkData }      from './withLink';


export const searchLinks = gql`

    query searchLinks( $board: ID!, $filter: LinkFilter! )
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
    if ( data.loading )
    {
        return { loadingLinks: true };
    }

    const props =
    {
        links        : mapLinkAccess( data.Board.links, ownProps.user ),
        loadingLinks : false
    };

    return props;
}


function mapOptions( { board, search } )
{
    const options =
    {
        fetchPolicy : 'cache-and-network',

        variables :
        {
            board  : board.id,
            filter : filterSearch( search )
        }
    };

    return options;
}


export default graphql( searchLinks, { props: mapProps, options: mapOptions } );

