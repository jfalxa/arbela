import React from 'react';


function MemberForm( { value, onChange, onSubmit } )
{
    return (

        <form onSubmit={ onSubmit }>

            <label htmlFor="member-name">Add a member</label>

            <input
                id="member-name"
                name="member"
                value={ value }
                onChange={ onChange } />

            <button type="submit">Add</button>

        </form>

    );
}


export default MemberForm;
