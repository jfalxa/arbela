import { gql, graphql } from 'react-apollo';


export const addMember = gql`mutation addMember( $board: ID!, $user: ID! )
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
    const addMember = ( board, user ) =>
    {
        const options =
        {
            variables : { board, user }
        };

        return mutate( options );
    }

    return { addMember };
}


export default graphql( addMember, { props: mapProps } );
