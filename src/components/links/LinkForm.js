import React from 'react';


function LinkForm( { title, url, description, hidden, onChange, onSubmit } )
{
    return (

        <form onSubmit={ onSubmit }>

            <label htmlFor="link-title">Title</label>
            <input id="link-title" name="title" value={ title } onChange={ onChange } />

            <label htmlFor="link-url">URL</label>
            <input id="link-url" name="url" value={ url } onChange={ onChange } />

            <label htmlFor="link-description">Description</label>
            <input id="link-description" name="description" value={ description } onChange={ onChange } />

            <input id="link-hidden" name="hidden" type="checkbox" checked={ hidden } onChange={ onChange } />
            <label htmlFor="link-hidden">Private</label>

            <button type="submit">Save</button>

        </form>

    );
}


export default LinkForm;
