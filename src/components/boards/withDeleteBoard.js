import { gql, graphql } from 'react-apollo';


export const deleteBoard = gql`mutation deleteBoard( $id: ID! )
{
    deleteBoard( id: $id )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const deleteBoard = id =>
    {
        const options =
        {
            variables : { id }
        };

        return mutate( options );
    }

    return { deleteBoard };
}


export default graphql( deleteBoard, { props: mapProps } );
