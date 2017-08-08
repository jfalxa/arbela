import { gql, graphql } from 'react-apollo';


export const createBoard = gql`mutation createBoard( $title: String!, $description: String!, $owner: ID! )
{
    createBoard( title: $title, description: $description, ownerId: $owner )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createBoard = ( board, owner ) =>
    {
        const options =
        {
            variables : { ...board, owner }
        };

        return mutate( options );
    }

    return { createBoard };
}


export default graphql( createBoard, { props: mapProps } );
