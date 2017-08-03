import React          from 'react';
import LinkForm       from './LinkForm';
import withLink       from './link';
import withUpdateLink from './updateLink';


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

        const { link, updateLink }        = this.props;
        const { title, url, description } = this.state;

        updateLink( { id: link.id, title, url, description } )
            .then( res => console.log( 'Link updated', res ) )
            .catch( err => console.log( 'Failed updating link', err ) );
    }


    render()
    {
        if ( this.props.loading && !this.props.link )
        {
            return <p>Loading...</p>;
        }

        const { title, url, description } = this.state;

        return (

            <LinkForm
                title={ title }
                url={ url }
                description={ description }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withLink( withUpdateLink( EditLink ) );
