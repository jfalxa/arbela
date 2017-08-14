import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const boardMembers = gql`query boardMembers( $slug: String! )
{
    Board( slug: $slug )
    {
        id

        owner
        {
            id
            name
        }

        members
        {
            id
            name
        }
    }
}`;


function mapProps( { data } )
{
    const props =
    {
        owner               : get( data, 'Board.owner' ),
        members             : get( data, 'Board.members' ),
        loadingMembers      : data.loading,
        refetchBoardMembers : data.refetch
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { slug: match.params.slug }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardMembers, { props: mapProps, options: mapOptions } );

