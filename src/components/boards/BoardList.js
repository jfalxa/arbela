import React     from 'react';
import CardList  from '../generic/CardList';
import BoardCard from './BoardCard';


function BoardList( { boards } )
{
    return (

        <CardList>

            { boards.map( board => (

                <BoardCard { ...board }
                    key={ board.id }  />

            ) ) }

        </CardList>

    );
}


export default BoardList;
