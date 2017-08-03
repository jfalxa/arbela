import { gql, graphql } from 'react-apollo';


export const allLinks = gql`query allLinks
{
    allLinks(orderBy: createdAt_DESC)
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, links: data.allLinks };
}


export default graphql( allLinks, { props: mapProps, options: { fetchPolicy: 'cache-and-network' } } );

