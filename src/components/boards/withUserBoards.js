import { gql, graphql }   from 'react-apollo';
import pick               from 'lodash/pick';
import { mapBoardAccess } from '../../utils/boardAccess';
import { boardData }      from './withBoard';


export const userBoards = gql`

    query userBoards( $name: String!, $user: ID )
    {
        User( name: $name )
        {
            id
            name

            boards(
                orderBy: createdAt_DESC,
                filter: { hidden: false }
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
                filter: { hidden: false }
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
    if ( data.loading )
    {
        return { loadingBoards: true };
    }

    const { User } = data;
    const { user } = ownProps;

    const props =
    {
        loadingBoards : false,
        user          : pick( User, ['id', 'name'] ),
        ownedBoards   : mapBoardAccess( User.boards, user ),
        joinedBoards  : mapBoardAccess( User.joinedBoards, user ),
    };

    return props;
}


function mapOptions( { match, user } )
{
    const options =
    {
        variables:
        {
            name : match.params.name,
            user : user && user.id
        },

        fetchPolicy: 'cache-and-network'
    };

    return options;
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

