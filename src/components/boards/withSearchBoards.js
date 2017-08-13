import { gql, graphql } from 'react-apollo';
import { boardData }    from './withBoard';


export const searchBoards = gql`

    query allBoards( $criteria: BoardFilter! )
    {
        allBoards(
            orderBy: createdAt_DESC,
            filter: $criteria
        )
        {
            ...BoardData
        }
    }

    ${ boardData }

`;


function buildCriteria( search )
{
    const tokens = search.split( ' ' );

    const titleCriteria       = tokens.map( token => ( { title_contains: token } ) );
    const descriptionCriteria = tokens.map( token => ( { description_contains: token } ) );

    return [...titleCriteria, ...descriptionCriteria];
}


function mapProps( { data, ownProps } )
{
    return { loadingBoards: data.loading, boards: data.allBoards };
}


function mapOptions( { search } )
{
    const criteria =
    {
        hidden : false,
        OR     : buildCriteria( search )
    };

    const options =
    {
        variables   : { criteria },
        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( searchBoards, { props: mapProps, options: mapOptions } );

