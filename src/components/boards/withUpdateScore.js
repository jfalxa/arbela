import { gql, graphql } from 'react-apollo';


export const updateScore = gql`mutation updateScore( $id: ID!, $score: Int! )
{
    updateBoardLink( id: $id, score: $score )
    {
        id
        score
    }
}`;


function mapProps( { ownProps, mutate } )
{
    const updateScore = ( id, score ) =>
    {
        const options =
        {
            variables : { id, score }
        };

        return mutate( options );
    }

    return { updateScore };
}


export default graphql( updateScore, { props: mapProps } );
