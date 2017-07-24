import { gql, graphql } from 'react-apollo';


export const allPosts = gql`query allPosts
{
    allPosts(orderBy: createdAt_DESC)
    {
        id
        title
        url
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, posts: data.allPosts };
}


export default graphql( allPosts, { props: mapProps } );

