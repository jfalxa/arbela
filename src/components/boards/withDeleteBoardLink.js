import { gql, graphql } from 'react-apollo';


export const deleteBoardLink = gql`mutation deleteBoardLink( $id: ID! )
{
    deleteBoardLink( id: $id )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const deleteBoardLink = linkID =>
    {
        const options =
        {
            variables : { id: linkID }
        };

        return mutate( options );
    }

    return { deleteBoardLink };
}


export default graphql( deleteBoardLink, { props: mapProps } );
