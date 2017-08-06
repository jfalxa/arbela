import { gql, graphql } from 'react-apollo';


export const boardLinks = gql`query boardLinks( $id: ID! )
{
    Board( id: $id )
    {
        id
        title
        description

        links( orderBy: createdAt_DESC )
        {
            score

            link
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
    }
}`;


function mapProps( { data } )
{
    if ( !data.Board )
    {
        return { loadingBoard: data.loading };
    }

    const board =
    {
        id          : data.Board.id,
        title       : data.Board.title,
        description : data.Board.description,
    };

    // flatten the description of links by merging data coming from BoardLink and its Link
    const links = data.Board.links.map( ( { score, link } ) => ( { score, ...link } ) );

    const props =
    {
        board,
        links,
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

