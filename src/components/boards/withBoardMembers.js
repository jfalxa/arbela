import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';
import pick             from 'lodash/pick';


export const boardMembers = gql`query boardMembers( $id: ID! )
{
    Board( id: $id )
    {
        id
        title

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
        board               : pick( data.Board, ['id', 'title'] ),
        owner               : get( data, 'Board.owner' ),
        members             : get( data, 'Board.members' ),
        loadingMembers      : data.loading,
        refetchBoardMembers : data.refetch
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardMembers, { props: mapProps, options: mapOptions } );

