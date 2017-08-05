import { gql, graphql } from 'react-apollo';


export const boardLinks = gql`query boardLinks( $id: ID! )
{
    Board( id: $id )
    {
        id
        title
        description

        links(
            orderBy: createdAt_DESC,
            filter: { hidden: false }
        )
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
    const props =
    {
        loadingBoard : data.loading,
        board        : data.Board
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardLinks, { props: mapProps, options: mapOptions } );

