import React from 'react';


function LoginForm( { title, url, description, hidden, onChange, onSubmit } )
{
    return (

        <form onChange={ onChange } onSubmit={ onSubmit }>

            <label htmlFor="link-title">Title</label>
            <input id="link-title" name="title" value={ title } />

            <label htmlFor="link-url">URL</label>
            <input id="link-url" name="url" value={ url } />

            <label htmlFor="link-description">Description</label>
            <input id="link-description" name="description" value={ description } />

            <input id="link-hidden" name="hidden" type="checkbox" checked={ hidden } style={ { display: 'inline' } } />
            <label htmlFor="link-hidden">Private</label>

            <button type="submit">Save</button>

        </form>

    );
}


export default LoginForm;
