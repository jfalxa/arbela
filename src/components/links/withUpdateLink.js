import { gql, graphql } from 'react-apollo';


export const updateLink = gql`mutation updateLink( $id: ID!, $title: String!, $url: String!, $description: String!, $hidden: Boolean! )
{
    updateLink( id: $id, title: $title, url: $url, description: $description, hidden: $hidden )
    {
        id
        title
        url
        description
        hidden
    }
}`;


function mapProps( { ownProps, mutate } )
{
    const updateLink = link =>
    {
        const options =
        {
            variables : link
        };

        return mutate( options );
    }

    return { updateLink };
}


export default graphql( updateLink, { props: mapProps } );
