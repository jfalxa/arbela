import { gql, graphql }             from 'react-apollo';
import get                          from 'lodash/get';
import { mapBoardAccess }           from '../../utils/boardAccess';
import { filterUser, filterSearch } from '../../utils/boardFilter';
import { boardData }                from './withBoard';


export const searchBoards = gql`

    query allBoards( $filter: BoardFilter! )
    {
        allBoards(
            orderBy: createdAt_DESC,
            filter: $filter
        )
        {
            ...BoardData
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
        data    : mapBoardAccess( data.allBoards, ownProps.user.data ),
        loading : data.loading
    };

    return { boards };
}


// hard dependency on withUser hoc
function mapOptions( { user, search } )
{
    const filter =
    {
        AND:
        [
            filterUser( user.data ),
            filterSearch( search )
        ]
    };


    const options =
    {
        variables   : { filter, user: get( user, 'data.id' ) },
        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( searchBoards, { props: mapProps, options: mapOptions } );

