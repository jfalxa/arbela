import { gql, graphql } from 'react-apollo';


export const shareLink = gql`mutation shareLink( $board: ID!, $link: ID! )
{
    createBoardLink( score: 0, boardId: $board, linkId: $link )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const shareLink = ( board, link ) =>
    {
        const options =
        {
            variables : { board, link }
        };

        return mutate( options );
    }

    return { shareLink };
}


export default graphql( shareLink, { props: mapProps } );
