import React from 'react';


function BoardForm( { title, url, description, onChange, onSubmit } )
{
    return (

        <form onSubmit={ onSubmit }>

            <label htmlFor="board-title">Title</label>
            <input id="board-title" name="title" value={ title } onChange={ onChange } />

            <label htmlFor="board-description">Description</label>
            <input id="board-description" name="description" value={ description } onChange={ onChange } />

            <button type="submit">Save</button>

        </form>

    );
}


export default BoardForm;
