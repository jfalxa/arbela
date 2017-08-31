import { gql, graphql }   from 'react-apollo';
import get                from 'lodash/get';
import pick               from 'lodash/pick';
import { mapBoardAccess } from '../../utils/boardAccess';
import { filterUser }     from '../../utils/boardFilter';
import { boardData }      from './withBoard';


export const userBoards = gql`

    query userBoards( $name: String!, $user: ID, $filter: BoardFilter! )
    {
        User( name: $name )
        {
            id
            name

            boards(
                orderBy: createdAt_DESC,
                filter: $filter
            )
            {
                ...BoardData
            }

            joinedBoards(
                orderBy: createdAt_DESC,
                filter: $filter
            )
            {
                ...BoardData
            }
        }
    }

    ${ boardData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.User )
    {
        return { userBoards: { loading: true } };
    }

    const user = ownProps.user.data;

    const owner        = pick( data.User, ['id', 'name'] );
    const ownedBoards  = mapBoardAccess( data.User.boards, user );
    const joinedBoards = mapBoardAccess( data.User.joinedBoards, user );

    const userBoards =
    {
        loading : data.loading,
        error   : data.error,
        data    : { owner, joinedBoards, ownedBoards }
    };

    return { userBoards };
}


// hard dependency on withUser hoc
function mapOptions( { match, user } )
{
    const options =
    {
        variables:
        {
            name   : match.params.name,
            user   : get( user, 'data.id' ),
            filter : filterUser( user.data )
        },

        fetchPolicy: 'cache-and-network'
    };

    return options;
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

