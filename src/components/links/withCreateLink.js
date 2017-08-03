import { gql, graphql } from 'react-apollo';


export const createLink = gql`mutation createLink( $title: String!, $url: String!, $description: String!, $author: ID! )
{
    createLink( title: $title, url: $url, description: $description, authorId: $author )
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

        return mutate( options );
    }

    return { createLink };
}


export default graphql( createLink, { props: mapProps } );
