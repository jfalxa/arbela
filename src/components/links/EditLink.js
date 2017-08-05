import React             from 'react';
import LinkFormContainer from './LinkFormContainer';
import withLink          from './withLink';
import withUpdateLink    from './withUpdateLink';
import withDeleteLink    from './withDeleteLink';


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
        if ( this.props.loadingLink && !this.props.link )
        {
            return <p>Loading...</p>;
        }

        const { title, url, description, hidden } = this.props.link;

        return (

            <section>

                <h2>Edit link</h2>

                <LinkFormContainer
                    title={ title }
                    url={ url }
                    description={ description }
                    hidden={ hidden }
                    onSubmit={ this.handleSubmit } />

                <button onClick={ this.handleDelete }>Delete</button>

            </section>

        );
    }
}


export default withLink( withUpdateLink( withDeleteLink( EditLink ) ) );
