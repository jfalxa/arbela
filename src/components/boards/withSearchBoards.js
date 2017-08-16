import { gql, graphql }             from 'react-apollo';
import { mapBoardAccess }           from '../../utils/boardAccess';
import { filterUser, filterSearch } from '../../utils/boardFilter';
import { boardData }                from './withBoard';


export const searchBoards = gql`

    query allBoards( $filter: BoardFilter!, $user: ID )
    {
        allBoards(
            orderBy: createdAt_DESC,
            filter: $filter
        )
        {
            ...BoardData

            _membersMeta( filter: { id: $user } )
            {
                count
            }
        }
    }

    ${ boardData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.allBoards )
    {
        return { boards: { loading: true } };
    }

    const boards =
    {
        data    : mapBoardAccess( data.allBoards, ownProps.user ),
        loading : data.loading
    };

    return { boards };
}


function mapOptions( { user, search } )
{
    const filter =
    {
        AND:
        [
            filterUser( user ),
            filterSearch( search )
        ]
    };


    const options =
    {
        variables   : { filter, user: user && user.id },
        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( searchBoards, { props: mapProps, options: mapOptions } );

