import React         from 'react';
import Box           from '../utilities/Box';
import Loader        from '../utilities/Loader';
import BoardCard     from './BoardCard';
import withAllBoards from '../../graphcool/board/allBoards';


const BoardBox = Box.withComponent( 'section' ).extend`

    max-width: 700px;

`;


class BoardList extends React.Component
{
    render()
    {
        const { loading, boards } = this.props;

        if ( loading )
        {
            return <Loader />;
        }

        return (

            <BoardBox flex column>
                { boards.map( board => <BoardCard key={ board.id } { ...board } /> ) }
            </BoardBox>

        );
    }
}


export default withAllBoards( BoardList );
