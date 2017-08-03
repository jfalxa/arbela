import { gql, graphql } from 'react-apollo';


export const signinUser = gql`mutation signinUser( $email: String!, $password: String! )
{
    signinUser( email: { email: $email, password: $password } )
    {
        token
    }
}`;


function mapProps( { mutate, ownProps } )
{
    const signinUser = user =>
    {
        const options =
        {
            variables : user,
        };

        return mutate( options );
    }

    return { signinUser };
}


export default graphql( signinUser, { props: mapProps } );
