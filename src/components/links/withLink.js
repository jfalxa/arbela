import { gql, graphql }  from 'react-apollo';
import { getLinkAccess } from '../../utils/linkAccess';


export const linkData = gql`

    fragment LinkData on Link
    {
        id
        title
        url
        description
        score
        createdAt

        author
        {
            id
            name
        }

        trail
        {
            board
            {
                title
                slug
                hidden
            }
        }
    }

`;


export const link = gql`

    query link( $id: ID!, $user: ID )
    {
        Link( id: $id )
        {
            ...LinkData

            _votersMeta( filter: { id: $user } )
            {
                count
            }
        }
    }

    ${ linkData }

`;


function mapProps( { data, ownProps } )
{
    if ( data.loading && !data.link )
    {
        return { link: { loading: true } };
    }

    const link =
    {
        data    : data.Link,
        access  : getLinkAccess( data.Link, ownProps.user ),
        loading : data.loading
    };

    return { link };
}


function mapOptions( { id, user, match } )
{
    const options =
    {
        variables :
        {
            id   : id || match.params.id,
            user : user && user.id
        },

        fetchPolicy : 'cache-and-network'
    };

    return options;
}


export default graphql( link, { props: mapProps, options: mapOptions } );

