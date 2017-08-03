import React          from 'react';
import LinkForm       from './LinkForm';
import withLink       from './link';
import withUpdateLink from './updateLink';
import withDeleteLink from './deleteLink';


class EditLink extends React.Component
{
    state =
    {
        title       : '',
        url         : '',
        description : ''
    }


    componentWillReceiveProps( { link } )
    {
        this.setState( {
            title       : link.title,
            url         : link.url,
            description : link.description
        } );
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { link, updateLink, history } = this.props;
        const { title, url, description }   = this.state;

        updateLink( { id: link.id, title, url, description } )
            .then( res => console.log( 'Link updated', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed updating link', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { link, deleteLink, history } = this.props;

        deleteLink( link.id )
            .then( res => console.log( 'Link deleted', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed deleting link', err ) );
    }


    render()
    {
        if ( this.props.loading && !this.props.link )
        {
            return <p>Loading...</p>;
        }

        const { title, url, description } = this.state;

        return (

            <section>

                <h2>Edit link</h2>

                <LinkForm
                    title={ title }
                    url={ url }
                    description={ description }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

                <button onClick={ this.handleDelete }>DELETE</button>

            </section>

        );
    }
}


export default withLink( withUpdateLink( withDeleteLink( EditLink ) ) );
