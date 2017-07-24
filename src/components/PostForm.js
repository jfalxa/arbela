import React from 'react';


export default class PostForm extends React.Component
{
    constructor( props )
    {
        super();

        this.state =
        {
            title       : props.title || '',
            url         : props.url || '',
            description : props.description || ''
        }
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( {
            title       : nextProps.title || '',
            url         : nextProps.url || '',
            description : nextProps.description || ''
        } );
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();
        this.props.onSubmit( this.state );
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

