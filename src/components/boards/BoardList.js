import React     from 'react';
import Box       from '../generic/Box';
import BoardCard from './BoardCard';


const Ul = Box.withComponent( 'ul' );


function BoardList( { boards } )
{
    return (

        <Ul column align="stretch" alignSelf="stretch">

            { boards.map( board => (

                <BoardCard { ...board }
                    key={ board.id }  />

            ) ) }

        </Ul>

    )
}


export default BoardList;
