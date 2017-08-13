import { gql, graphql } from 'react-apollo';


export const boardData = gql`

     fragment BoardData on Board
     {
        id
        title
        slug
        description
        hidden
        closed

        owner
        {
            id
            name
        }
    }

`;

export const board = gql`

    query board( $slug: String! )
    {
        Board( slug: $slug )
        {
            ...BoardData
        }
    }

    ${ boardData }

`;


function mapProps( { data } )
{
    return { loadingBoard: data.loading, board: data.Board };
}


function mapOptions( { match } )
{
    return { variables: { slug: match.params.slug }, fetchPolicy: 'cache-and-network' };
}


export default graphql( board, { props: mapProps, options: mapOptions } );

