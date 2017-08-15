import { gql, graphql }   from 'react-apollo';
import { getBoardAccess } from '../../utils/boardAccess';
import { boardData }      from './withBoard';


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


function buildFilter( search )
{
    const tokens = search.split( ' ' );

    const titleFilter       = tokens.map( token => ( { title_contains: token } ) );
    const descriptionFilter = tokens.map( token => ( { description_contains: token } ) );

    return { OR: [...titleFilter, ...descriptionFilter] };
}


function mapProps( { data, ownProps } )
{
    if ( data.loading )
    {
        return { loadingBoards: true };
    }

    const boards = data.allBoards.map( board => (
        { ...board, access: getBoardAccess( board, ownProps.user ) }
    ) );

    return { boards, loadingBoards: false };
}


function mapOptions( { user, search } )
{
    // as long as the user is not authenticated, only show public boards
    // when logged in also show hidden boards that the user is member/owner of
    const userFilter = ( !user )
        ? { hidden: false }
        : {
            OR:
            [
                { hidden: false },
                { owner: { id: user.id } },
                { members_some: { id: user.id } }
            ]
        };

    const filter =
    {
        AND:
        [
            userFilter,
            buildFilter( search )
        ]
    }


    const options =
    {
        variables   : { filter, user: user && user.id },
        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( searchBoards, { props: mapProps, options: mapOptions } );

