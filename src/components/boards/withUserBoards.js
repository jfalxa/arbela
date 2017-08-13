import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';
import pick             from 'lodash/pick';
import { boardData }    from './withBoard';


export const userBoards = gql`

    query userBoards( $name: String! )
    {
        User( name: $name )
        {
            id
            name

            boards(
                orderBy: createdAt_DESC,
                filter: { hidden: false }
            )
            {
                ...BoardData
            }

            joinedBoards(
                orderBy: createdAt_DESC,
                filter: { hidden: false }
            )
            {
                ...BoardData
            }
        }
    }

    ${ boardData }

`;


function mapProps( { data } )
{
    const props =
    {
        loadingBoards : data.loading,
        user          : pick( data.User, ['id', 'name'] ),
        ownedBoards   : get( data, 'User.boards' ),
        joinedBoards  : get( data, 'User.joinedBoards' )
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { name: match.params.name }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

