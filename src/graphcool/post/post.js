import { gql, graphql } from 'react-apollo';
import map              from 'lodash/map';


export const post = gql`query post( $id: ID! )
{
    Post( id: $id )
    {
        id
        title
        url
        description

        author
        {
            name
        }

        boards
        {
            id
        }
    }
}`;


function mapProps( { data } )
{
    if ( data.loading )
    {
        return { loading: true };
    }

    const boards = map( data.Post.boards, 'id' );
    const post   = { ...data.Post, boards };

    return { post };
}


function mapOptions( { match } )
{
    return { variables: { id: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( post, { props: mapProps, options: mapOptions } );

