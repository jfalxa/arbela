import { gql, graphql } from 'react-apollo';


export const updateLink = gql`mutation updateLink( $id: ID!, $title: String!, $url: String!, $description: String! )
{
    updateLink( id: $id, title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
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
