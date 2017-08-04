import { gql, graphql } from 'react-apollo';


export const updateBoard = gql`mutation updateBoard( $id: ID!, $title: String!, $description: String! )
{
    updateBoard( id: $id, title: $title, description: $description )
    {
        id
        title
        description
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
