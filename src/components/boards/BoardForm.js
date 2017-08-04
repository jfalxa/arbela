import React from 'react';


function BoardForm( { title, url, description, onChange, onSubmit } )
{
    return (

        <form onChange={ onChange } onSubmit={ onSubmit }>

            <label htmlFor="board-title">Title</label>
            <input id="board-title" name="title" value={ title } />

            <label htmlFor="board-description">Description</label>
            <input id="board-description" name="description" value={ description } />

            <button type="submit">Save</button>

        </form>

    );
}


export default BoardForm;
