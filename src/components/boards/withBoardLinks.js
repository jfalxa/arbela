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
            id
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

