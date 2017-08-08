import { gql, graphql } from 'react-apollo';


export const updateScore = gql`mutation updateScore( $link: ID!, $score: Int!, $voter: ID! )
{
    updateBoardLink( id: $link, score: $score )
    {
        id
        score
    }

    addToLinkVoters( votesBoardLinkId: $link, votersUserId: $voter )
    {
        votesBoardLink
        {
            id
        }

        votersUser
        {
            id
        }
    }

}`;


function mapProps( { ownProps, mutate } )
{
    const updateScore = ( link, score, voter ) =>
    {
        const options =
        {
            variables : { link, score, voter }
        };

        return mutate( options );
    }

    return { updateScore };
}


export default graphql( updateScore, { props: mapProps } );
