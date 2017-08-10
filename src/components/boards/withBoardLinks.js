import { gql, graphql } from 'react-apollo';


export const boardLinks = gql`query boardLinks( $id: ID! )
{
    Board( id: $id )
    {
        id
        title
        description

        links( orderBy: score_DESC )
        {
            id
            title
            url
            description
            score

            author
            {
                name
            }

            board
            {
                id
                title
            }
        }
    }
}`;


function mapProps( { data } )
{
    const props =
    {
        board             : data.Board,
        loadingBoard      : data.loading,
        refetchBoardLinks : data.refetch
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardLinks, { props: mapProps, options: mapOptions } );

