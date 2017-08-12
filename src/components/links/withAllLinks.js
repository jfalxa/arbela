import { gql, graphql } from 'react-apollo';


export const allLinks = gql`query allLinks
{
    allLinks(
        orderBy: createdAt_DESC,
        filter:
        {
            board:
            {
                hidden: false
            }
        }
    )
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
}`;


function mapProps( { data } )
{
    return { loadingLinks: data.loading, links: data.allLinks };
}


export default graphql( allLinks, { props: mapProps, options: { fetchPolicy: 'cache-and-network' } } );

