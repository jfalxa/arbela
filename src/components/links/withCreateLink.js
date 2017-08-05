import { gql, graphql } from 'react-apollo';


export const createLink = gql`mutation createLink( $title: String!, $url: String!, $description: String!, $author: ID!, $hidden: Boolean! )
{
    createLink( title: $title, url: $url, description: $description, authorId: $author, hidden: $hidden )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createLink = link =>
    {
        const options =
        {
            variables : link
        };

        return mutate( options )
            .then( res => res.data.createLink );
    }

    return { createLink };
}


export default graphql( createLink, { props: mapProps } );
