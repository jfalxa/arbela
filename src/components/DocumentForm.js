import React              from 'react';
import withCreateDocument from '../graphcool/createDocument';


class DocumentForm extends React.Component
{
    state =
    {
        title       : '',
        url         : '',
        description : ''
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { createDocument, history } = this.props;

        createDocument( this.state )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        const { title, url, description } = this.state;

        return (

            <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                <input name="title" placeholder="title" value={ title } />
                <input name="url" placeholder="url" value={ url } />
                <textarea name="description" placeholder="description" value={ description } />
                <button type="submit">Save</button>
            </form>

        );
    }
}


export default withCreateDocument( DocumentForm );
