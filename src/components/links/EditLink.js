import React          from 'react';
import { compose }    from 'react-apollo';
import { Redirect }   from 'react-router-dom';
import LinkEditor     from './LinkEditor';
import withUser       from '../auth/withUser';
import withLoader     from '../generic/withLoader';
import withLink       from './withLink';
import withUpdateLink from './withUpdateLink';
import withDeleteLink from './withDeleteLink';


class EditLink extends React.Component
{
    handleSubmit = ( linkUpdate ) =>
    {
        const { link, updateLink, history } = this.props;

        updateLink( { id: link.data.id, ...linkUpdate } )
            .then( res => console.log( 'Link updated', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed updating link', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { link, deleteLink, history } = this.props;

        deleteLink( link.data.id )
            .then( res => console.log( 'Link deleted', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed deleting link', err ) );
    }


    render()
    {
        const { user, link } = this.props;

        if ( !user.data )
        {
            return <Redirect to="/" />;
        }

        return (

            <LinkEditor
                link={ link.data }
                onSubmit={ this.handleSubmit }
                onDelete={ this.handleDelete } />

        );
    }
}


const connect = compose(
    withUser,
    withLink,
    withUpdateLink,
    withDeleteLink,
    withLoader( p => p.user.loading || p.link.loading )
);

export default connect( EditLink );
