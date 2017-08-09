import React from 'react';


function BoardForm( { title, url, description, hidden, closed, onChange, onSubmit } )
{
    return (

        <form onSubmit={ onSubmit }>

            <label htmlFor="board-title">Title</label>
            <input id="board-title" name="title" value={ title } onChange={ onChange } />

            <label htmlFor="board-description">Description</label>
            <input id="board-description" name="description" value={ description } onChange={ onChange } />

            <input id="board-hidden" name="hidden" type="checkbox" checked={ hidden } onChange={ onChange } />
            <label htmlFor="board-hidden">Private</label>

            <input id="board-closed" name="closed" type="checkbox" checked={ closed } onChange={ onChange } />
            <label htmlFor="board-closed">Closed</label>

            <button type="submit">Save</button>

        </form>

    );
}


export default BoardForm;
