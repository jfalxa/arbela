import { gql, graphql } from 'react-apollo';


export const boardData = gql`

     fragment BoardData on Board
     {
        id
        title
        slug
        description
        hidden
        closed

        owner
        {
            id
            name
        }
    }

`;

export const board = gql`

    query board( $slug: String!, $user: ID )
    {
        Board( slug: $slug )
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
    if ( data.loading )
    {
        return { loadingBoard: true };
    }

    const board        = data.Board;
    const { user }     = ownProps;
    const refetchBoard = data.refetch;

    const access =
    {
        isAuth   : Boolean( user ),
        isMember : board._membersMeta.count === 1,
        isOwner  : user && ( board.owner.id === user.id )
    };

    return { board, access, refetchBoard, loadingBoard: false };
}


function mapOptions( { user, match } )
{
    const options =
    {
        variables :
        {
            user : user && user.id,
            slug : match.params.slug
        },

        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( board, { props: mapProps, options: mapOptions } );

