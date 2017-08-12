import React from 'react';


function LinkForm( { title, url, description, onChange, onSubmit, children } )
{
    return (

        <form onSubmit={ onSubmit }>

            <label htmlFor="link-title">Title</label>
            <input id="link-title" name="title" autoFocus value={ title } onChange={ onChange } />

            <label htmlFor="link-url">URL</label>
            <input id="link-url" name="url" value={ url } onChange={ onChange } />

            <label htmlFor="link-description">Description</label>
            <textarea id="link-description" name="description" rows="5" value={ description } onChange={ onChange } />

            { children || <button type="submit">Save</button> }

        </form>

    );
}


export default LinkForm;
