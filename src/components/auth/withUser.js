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
    return { loadingUser: data.loading, user: data.user, refetchUser: data.refetch };
}


export default graphql( user, { props: mapProps, options: { fetchPolicy: 'network-only' } } );

