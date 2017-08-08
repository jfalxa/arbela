import { gql, graphql } from 'react-apollo';


export const joinBoard = gql`mutation joinBoard( $board: ID!, $user: ID! )
{
    addToBoardMembers( joinedBoardsBoardId: $board, membersUserId: $user )
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
    const joinBoard = ( board, user ) =>
    {
        const options =
        {
            variables : { board, user }
        };

        return mutate( options );
    }

    return { joinBoard };
}


export default graphql( joinBoard, { props: mapProps } );
