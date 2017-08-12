import React    from 'react';
import { Link } from 'react-router-dom';
import withList from '../generic/withList';


export function LinkCard( { id, title, url, description, author, board, children } )
{
    return (

        <li>

            <h4><Link to={ url } target="blank">{ title }</Link></h4>

            <aside>
                <Link to={ `/users/${ author.name }` }>{ author.name }</Link>
                <Link to={ `/boards/${ board.slug }` }>{ board.title }</Link>
                <Link to={ `/links/${ id }/edit` }>(edit)</Link>
                <Link to={ `/links/${ id }/share` }>(share)</Link>
            </aside>

            <p>{ description }</p>

            { children }

        </li>

    );
}


export default withList( p => LinkCard );
