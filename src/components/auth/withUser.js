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
    const props =
    {
        user        : data.user,
        loadingUser : data.loading,
        refetchUser : data.refetch
    };

    return props;
}


export default graphql( user, { props: mapProps, options: { fetchPolicy: 'network-only' } } );

