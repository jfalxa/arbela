import React    from 'react';
import { Link } from 'react-router-dom';
import List     from '../generic/List';


function BoardCard( { id, title, description } )
{
    return (

        <li>
            <h3><Link to={ `/boards/${ id }` }>{ title }</Link></h3>
            <p>{ description }</p>
        </li>

    );
}


export default List( BoardCard );
