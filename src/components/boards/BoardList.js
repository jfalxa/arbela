import React    from 'react';
import { Link } from 'react-router-dom';
import withList from '../generic/withList';


function BoardCard( { id, title, description } )
{
    return (

        <li>
            <h3><Link to={ `/boards/${ id }` }>{ title }</Link></h3>
            <Link to={ `/boards/${ id }/edit` }>(edit)</Link>
            <p>{ description }</p>
        </li>

    );
}


export default withList( p => BoardCard );
