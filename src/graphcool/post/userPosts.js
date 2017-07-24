import { gql, graphql } from 'react-apollo';


export const userPosts = gql`query userPosts( $name: String! )
{
    User(name: $name)
    {
        posts
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
    console.log( data )
    return { loading: data.loading, posts: data.User && data.User.posts };
}


function mapOptions( { match } )
{
    console.log( match.params.name )
    return { variables: { name: match.params.name } };
}


export default graphql( userPosts, { props: mapProps, options: mapOptions } );

