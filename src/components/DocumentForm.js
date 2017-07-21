import React           from 'react';
import withAddDocument from '../graphcool/addDocument';


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

        const { addDocument, history } = this.props;

        addDocument( this.state )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        const { title, url, description } = this.state;

        return (

            <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
                <input name="title" placeholder="title" value={ title } />
                <input name="url" placeholder="url" value={ url } />
                <input name="description" placeholder="description" value={ description } />
                <button type="submit">Save</button>
            </form>

        );
    }
}


export default withAddDocument( DocumentForm );
