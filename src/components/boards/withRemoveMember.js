import { gql, graphql } from 'react-apollo';


export const removeMember = gql`mutation removeMember( $board: ID!, $user: ID! )
{
    removeFromBoardMembers( joinedBoardsBoardId: $board, membersUserId: $user )
    {
        joinedBoardsBoard
        {
            id
        }

        membersUser
        {
            id
        }
    }
}`;


function mapProps( { mutate } )
{
    const removeMember = ( board, user ) =>
    {
        const options =
        {
            variables : { board, user }
        };

        return mutate( options );
    }

    return { removeMember };
}


export default graphql( removeMember, { props: mapProps } );
