import { gql, graphql } from 'react-apollo';


export const allLinks = gql`query allLinks
{
    allLinks(
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
}`;


function mapProps( { data } )
{
    return { loadingLinks: data.loading, links: data.allLinks };
}


export default graphql( allLinks, { props: mapProps, options: { fetchPolicy: 'cache-and-network' } } );

