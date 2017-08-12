import React    from 'react';
import { Link } from 'react-router-dom';
import withList from '../generic/withList';


function BoardCard( { slug, title, description } )
{
    return (

        <li>
            <h4><Link to={ `/boards/${ slug }` }>{ title }</Link></h4>
            <Link to={ `/boards/${ slug }/edit` }>(edit)</Link>
            <p>{ description }</p>
        </li>

    );
}


export default withList( p => BoardCard );
