import { gql, graphql } from 'react-apollo';


export const board = gql`query board( $id: ID! )
{
    Board( id: $id )
    {
        id
        title
        description
        hidden
    }
}`;


function mapProps( { data } )
{
    return { loadingBoard: data.loading, board: data.Board };
}


function mapOptions( { id, match } )
{
    return { variables: { id: id || match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( board, { props: mapProps, options: mapOptions } );

