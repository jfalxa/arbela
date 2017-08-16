import { gql, graphql } from 'react-apollo';


export const boardMembers = gql`query boardMembers( $slug: String! )
{
    Board( slug: $slug )
    {
        id

        members
        {
            id
            name
        }
    }
}`;


function mapProps( { data } )
{
    if ( data.loading && !data.Board )
    {
        return { members: { loading: true } };
    }

    const members =
    {
        data    : data.Board.members,
        loading : data.loading,
        refetch : data.refetch
    };

    return { members };
}


function mapOptions( { match } )
{
    return { variables: { slug: match.params.slug }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardMembers, { props: mapProps, options: mapOptions } );

