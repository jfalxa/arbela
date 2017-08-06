import { gql, graphql } from 'react-apollo';


export const availableBoards = gql`query availableBoards( $link: ID! )
{
    allBoards(
        orderBy: createdAt_DESC,
        filter:
        {
            links_none:
            {
                link:
                {
                    id: $link
                }
            }
        }
    )
    {
        id
        title
        description
    }
}`;


function mapProps( { data } )
{
    return { loadingBoards: data.loading, boards: data.allBoards };
}


function mapOptions( { match } )
{
    return { variables: { link: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( availableBoards, { props: mapProps, options: mapOptions } );

