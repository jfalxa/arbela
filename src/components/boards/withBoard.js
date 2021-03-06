import { gql, graphql }   from 'react-apollo';
import get                from 'lodash/get';
import { getBoardAccess } from '../../utils/boardAccess';


export const boardData = gql`

     fragment BoardData on Board
     {
        id
        title
        slug
        description
        hidden

        owner
        {
            id
            name
        }
    }

`;

export const board = gql`

    query board( $slug: String! )
    {
        Board( slug: $slug )
        {
            ...BoardData
        }
    }

    ${ boardData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.Board )
    {
        return { board: { loading: true } };
    }

    const board =
    {
        data    : data.Board,
        access  : getBoardAccess( data.Board, ownProps.user.data ),
        refetch : data.refetch,
        loading : data.loading
    };

    return { board };
}


// hard dependency on withUser hoc
function mapOptions( { user, match } )
{
    const options =
    {
        variables :
        {
            user : get( user, 'data.id' ),
            slug : match.params.board
        },

        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( board, { props: mapProps, options: mapOptions } );

