import React    from 'react';
import { Link } from 'react-router-dom';


function LinkCard( { id, title, url, description, author } )
{
    return (

        <li>

            <h3><Link to={ url } target="blank">{ title }</Link></h3>

            <p>{ description }</p>

            <aside>
                <Link to={ `/users/${ author.name }` }>{ author.name }</Link>
                <Link to={ `/edit/${ id }` }>(edit)</Link>
            </aside>

        </li>

    );
}


export default LinkCard;
