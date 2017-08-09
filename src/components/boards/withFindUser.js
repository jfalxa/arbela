import { gql, graphql } from 'react-apollo';


export const findUser = gql`query findUser( $name: String! )
{
    User( name: $name )
    {
        id
        name
    }
}`;


function mapProps( { data } )
{
    const props =
    {
        foundUser : data.User
    };

    return props;
}


function mapOptions( { searchedUser } )
{
    return { variables: { name: searchedUser }, fetchPolicy: 'cache-and-network' };
}


export default graphql( findUser, { props: mapProps, options: mapOptions } );

