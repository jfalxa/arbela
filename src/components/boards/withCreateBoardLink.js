import { gql, graphql } from 'react-apollo';


export const createBoardLink = gql`mutation createBoardLink( $board: ID!, $link: BoardLinklinkLink! )
{
    createBoardLink( boardId: $board, link: $link )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createBoardLink = ( board, link, user ) =>
    {
        const options =
        {
            variables :
            {
                board,
                link : { ...link, authorId: user }
            }
        };

        return mutate( options );
    }

    return { createBoardLink };
}


export default graphql( createBoardLink, { props: mapProps } );
