import React      from 'react';
import { Link }   from 'react-router-dom';
import Box        from '../generic/Box';
import Card       from '../generic/Card';
import CardHeader from '../generic/CardHeader';
import CardLinks  from '../generic/CardLinks';
import CardBody   from '../generic/CardBody';


const Li = Box.withComponent( 'li' );


function BoardCard( { access, slug, title, description, closed, hidden, owner } )
{
    return (

        <Li column>

            <Card>

                <CardHeader>
                    <Link to={ `/boards/${ slug }` }>{ title }</Link>
                </CardHeader>

                <CardLinks>
                    <Link to={ `/users/${ owner.name }` }>@{ owner.name }</Link>
                </CardLinks>

                <CardBody>{ description || '...' }</CardBody>

            </Card>

        </Li>

    );
}


export default BoardCard;
