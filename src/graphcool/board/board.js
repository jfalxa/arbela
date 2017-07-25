import { gql, graphql } from 'react-apollo';


export const board = gql`query board( $id: ID! )
{
    Board( id: $id )
    {
        id
        title
        description

        posts
        {
            id
            title
            url
            description

            author
            {
                name
            }
        }
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, board: data.Board };
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id } };
}


export default graphql( board, { props: mapProps, options: mapOptions } );

