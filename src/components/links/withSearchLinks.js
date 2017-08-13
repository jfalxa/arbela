import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';
import { linkData }     from './withLink';


export const searchLinks = gql`

    query searchLinks( $board: ID!, $criteria: LinkFilter! )
    {
        Board( id: $board )
        {
            id

            links(
                orderBy: score_DESC,
                filter: $criteria
            )
            {
                ...LinkData
            }
        }
    }

    ${ linkData }

`;


function buildCriteria( search )
{
    const tokens = search ? search.split( ' ' ) : [];

    const titleCriteria       = tokens.map( token => ( { title_contains: token } ) );
    const urlCriteria         = tokens.map( token => ( { url_contains: token } ) );
    const descriptionCriteria = tokens.map( token => ( { description_contains: token } ) );

    return [...titleCriteria, ...urlCriteria, ...descriptionCriteria];
}


function mapProps( { data, ownProps } )
{
    return { loadingLinks: data.loading, links: get( data, 'Board.links' ) };
}


function mapOptions( { board, search } )
{
    const options =
    {
        fetchPolicy : 'cache-and-network',

        variables :
        {
            board    : board.id,
            criteria : { OR: buildCriteria( search ) }
        }
    };

    return options;
}


export default graphql( searchLinks, { props: mapProps, options: mapOptions } );

