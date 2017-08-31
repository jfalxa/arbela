import React          from 'react';
import { Link }       from 'react-router-dom';
import Box            from '../generic/Box';
import Card           from '../generic/Card';
import CardHeader     from '../generic/CardHeader';
import CardBody       from '../generic/CardBody';
import HostName       from '../generic/HostName';
import LinkInfo       from './LinkInfo';
import withAutoScroll from '../generic/withAutoScroll';


const Li = Box.withComponent( 'li' );


function LinkCard( { id, title, url, description, score, author, board, trail, createdAt, access, targeted, onVote } )
{
    return (

        <Li id={ id } align="center">

            <Card targeted={ targeted }>

                <CardHeader>
                    <Link to={ url } target="blank">{ title }</Link>
                    <HostName url={ url } />
                </CardHeader>

                <LinkInfo
                    id={ id }
                    score={ score }
                    date={ createdAt }
                    author={ author }
                    board={ board }
                    trail={ trail } />

                { description && <CardBody>{ description }</CardBody> }

            </Card>

        </Li>

    );
}


export default withAutoScroll( LinkCard );
