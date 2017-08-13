import React      from 'react';
import { Link }   from 'react-router-dom';
import Box        from '../generic/Box';
import Card       from '../generic/Card';
import CardHeader from '../generic/CardHeader';
import CardBody   from '../generic/CardBody';
import CardAside  from '../generic/CardAside';
import LinkVote   from './LinkVote';
import LinkTrail  from './LinkTrail';


const Li = Box.withComponent( 'li' );




function LinkCard( { id, title, url, description, score, author, board, trail, onVote } )
{
    return (

        <Li align="center">

            <LinkVote
                score={ score }
                onVote={ onVote } />

            <Card>

                <CardHeader title={ title } url={ url }>
                    <Link to={ `/links/${ id }/edit` }>(edit)</Link>
                </CardHeader>

                <LinkTrail author={ author } trail={ trail } />

                <CardBody>{ description }</CardBody>

            </Card>

            <CardAside>
                <Link to={ `/links/${ id }/share` }>(share)</Link>
            </CardAside>

        </Li>

    );
}


export default LinkCard;
