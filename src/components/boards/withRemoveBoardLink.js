import { gql, graphql } from 'react-apollo';


export const removeBoardLink = gql`mutation removeBoardLink( $board: ID!, $link: ID! )
{
    removeFromBoardLinks( boardsBoardId: $board, linksLinkId: $link )
    {
        boardsBoard
        {
            id
        }

        linksLink
        {
            id
        }
    }
}`;


function mapProps( { mutate } )
{
    const removeBoardLink = ( board, link ) =>
    {
        const options =
        {
            variables : { board, link }
        };

        return mutate( options );
    }

    return { removeBoardLink };
}


export default graphql( removeBoardLink, { props: mapProps } );
