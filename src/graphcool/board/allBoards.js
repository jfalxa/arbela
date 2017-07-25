import { gql, graphql } from 'react-apollo';


export const allBoards = gql`query allBoards
{
    allBoards(orderBy: updatedAt_DESC)
    {
        id
        title
        description
    }
}`;


function mapProps( { data } )
{
    return { loading: data.loading, posts: data.allBoards };
}


export default graphql( allBoards, { props: mapProps } );

