import React          from 'react';
import LinkEditor     from './LinkEditor';
import withUser       from '../auth/withUser';
import withLink       from './withLink';
import withUpdateLink from './withUpdateLink';
import withDeleteLink from './withDeleteLink';


class EditLink extends React.Component
{
    handleSubmit = ( linkUpdate ) =>
    {
        const { link, updateLink, history } = this.props;

        updateLink( { id: link.id, ...linkUpdate } )
            .then( res => console.log( 'Link updated', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed updating link', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { link, deleteLink, history } = this.props;

        deleteLink( link.id )
            .then( res => console.log( 'Link deleted', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed deleting link', err ) );
    }


    render()
    {
        const { link, loadingLink, loadingUser } = this.props;

        return (

            <LinkEditor
                link={ link }
                loadingLink={ loadingLink }
                loadingUser={ loadingUser }
                onSubmit={ this.handleSubmit }
                onDelete={ this.handleDelete } />

        );
    }
}


export default withUser( withLink( withUpdateLink( withDeleteLink( EditLink ) ) ) );
