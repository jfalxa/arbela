import { gql, graphql } from 'react-apollo';


const createUser = gql`mutation createUser( $email: String!, $password: String!, $name: String! )
{
    createUser( authProvider: { email: { email: $email, password: $password } }, name: $name )
    {
        id
    }
}`;


function mapProps( { mutate } )
{
    const createUser = user =>
    {
        const options =
        {
            variables : user
        };

        return mutate( options );
    }

    return { createUser };
}


export default graphql( createUser, { props: mapProps } );
