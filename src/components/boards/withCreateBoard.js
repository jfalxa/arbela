import { gql, graphql } from 'react-apollo';


export const createBoard = gql`mutation createBoard( $title: String!, $description: String! )
{
    createBoard( title: $title, description: $description )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createBoard = board =>
    {
        const options =
        {
            variables : board
        };

        return mutate( options );
    }

    return { createBoard };
}


export default graphql( createBoard, { props: mapProps } );
