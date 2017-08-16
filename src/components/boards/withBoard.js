import { gql, graphql }   from 'react-apollo';
import { getBoardAccess } from '../../utils/boardAccess';


export const boardData = gql`

     fragment BoardData on Board
     {
        id
        title
        slug
        description
        hidden
        closed

        owner
        {
            id
            name
        }
    }

`;

export const board = gql`

    query board( $slug: String!, $user: ID )
    {
        Board( slug: $slug )
        {
            ...BoardData

            _membersMeta( filter: { id: $user } )
            {
                count
            }
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
        access  : getBoardAccess( data.Board, ownProps.user ),
        refetch : data.refetch,
        loading : data.loading
    };

    return { board };
}


function mapOptions( { user, match } )
{
    const options =
    {
        variables :
        {
            user : user && user.id,
            slug : match.params.slug
        },

        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( board, { props: mapProps, options: mapOptions } );

