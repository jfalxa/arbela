import { gql, graphql } from 'react-apollo';


export const boardLinks = gql`query boardLinks( $slug: String! )
{
    Board( slug: $slug )
    {
        id
        title
        slug
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
                id
                name
            }

            board
            {
                id
                title
                slug
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
    return { variables: { slug: match.params.slug }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardLinks, { props: mapProps, options: mapOptions } );

