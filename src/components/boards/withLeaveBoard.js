import { gql, graphql } from 'react-apollo';


export const leaveBoard = gql`mutation leaveBoard( $board: ID!, $user: ID! )
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
    const leaveBoard = ( board, user ) =>
    {
        const options =
        {
            variables : { board, user }
        };

        return mutate( options );
    }

    return { leaveBoard };
}


export default graphql( leaveBoard, { props: mapProps } );
