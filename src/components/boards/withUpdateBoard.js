import { gql, graphql } from 'react-apollo';


export const updateBoard = gql`mutation updateBoard( $id: ID!, $title: String!, $slug: String!, $description: String!, $hidden: Boolean! )
{
    updateBoard( id: $id, title: $title, slug: $slug, description: $description, hidden: $hidden )
    {
        id
        title
        slug
        description
        hidden
    }
}`;


function mapProps( { ownProps, mutate } )
{
    const updateBoard = board =>
    {
        const options =
        {
            variables : board
        };

        return mutate( options );
    }

    return { updateBoard };
}


export default graphql( updateBoard, { props: mapProps } );
