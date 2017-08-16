import { gql, graphql } from 'react-apollo';


export const user = gql`query user
{
    user
    {
        id
        name
    }
}`;


function mapProps( { data } )
{
    const user =
    {
        data    : data.user,
        loading : data.loading,
        refetch : data.refetch
    };

    return { user };
}


export default graphql( user, { props: mapProps, options: { fetchPolicy: 'network-only' } } );

