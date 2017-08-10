import { gql, graphql } from 'react-apollo';


export const updateScore = gql`mutation updateScore( $link: ID!, $score: Int!, $voter: ID! )
{
    updateLink( id: $link, score: $score )
    {
        id
        score
    }

    addToLinkVoters( votesLinkId: $link, votersUserId: $voter )
    {
        votesLink
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
