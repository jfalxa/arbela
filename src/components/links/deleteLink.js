import { gql, graphql } from 'react-apollo';


export const deleteLink = gql`mutation deleteLink( $id: ID! )
{
    deleteLink( id: $id )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const deleteLink = id =>
    {
        const options =
        {
            variables : { id }
        };

        return mutate( options );
    }

    return { deleteLink };
}


export default graphql( deleteLink, { props: mapProps } );
