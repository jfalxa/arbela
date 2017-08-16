import { gql, graphql }   from 'react-apollo';
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

                _membersMeta( filter: { id: $user } )
                {
                    count
                }
            }

            joinedBoards(
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
    }

    ${ boardData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.User )
    {
        return { userBoards: { loading: true } };
    }

    const User     = data.User;
    const { user } = ownProps;

    const owner        = pick( User, ['id', 'name'] );
    const ownedBoards  = mapBoardAccess( User.boards, user );
    const joinedBoards = mapBoardAccess( User.joinedBoards, user );

    const userBoards =
    {
        loading : data.loading,
        error   : data.error,
        data    : { owner, joinedBoards, ownedBoards }
    };

    return { userBoards };
}


function mapOptions( { match, user } )
{
    const options =
    {
        variables:
        {
            name   : match.params.name,
            user   : user && user.id,
            filter : filterUser( user )
        },

        fetchPolicy: 'cache-and-network'
    };

    return options;
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

