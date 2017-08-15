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
            id

            board
            {
                id
                title
                slug
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
    if ( data.loadingLink )
    {
        return { loadingLink: true };
    }

    const props =
    {
        access : getLinkAccess( data.Link, ownProps.user ),
        link   : data.Link
    };

    return props;
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

