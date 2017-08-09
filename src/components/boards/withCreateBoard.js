import { gql, graphql } from 'react-apollo';


export const createBoard = gql`mutation createBoard( $title: String!, $description: String!, $hidden: Boolean!, $closed: Boolean!, $owner: ID! )
{
    createBoard( title: $title, description: $description, hidden: $hidden, closed: $closed, ownerId: $owner )
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

        return mutate( options )
            .then( res => res.data.createBoard );
    }

    return { createBoard };
}


export default graphql( createBoard, { props: mapProps } );
