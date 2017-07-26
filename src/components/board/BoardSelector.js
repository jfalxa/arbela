import React         from 'react';
import Box           from '../utilities/Box';
import Loader        from '../utilities/Loader';
import withAllBoards from '../../graphcool/board/allBoards';
import CheckboxGroup from '../utilities/CheckboxGroup';


const BoardSelectorBox = Box.withComponent( CheckboxGroup ).extend`

`;


function BoardCheckbox( { id, title, name, checked, onChange } )
{
    return (

        <label>

            <input
                type="checkbox"
                name={ name }
                value={ id }
                checked={ checked }
                onChange={ onChange } />

            { title }

        </label>
    )
}


class BoardSelector extends React.Component
{
    renderBoards()
    {
        return this.props.boards.map( board =>
        (
            <BoardCheckbox key={ board.id } { ...board } />
        ) );
    }


    render()
    {
        if ( this.props.loading )
        {
            return <Loader />;
        }

        return (

            <BoardSelectorBox flex column
                name="boards"
                onCheck={ this.props.onCheck }>

                <legend>Boards</legend>

                { this.renderBoards() }

            </BoardSelectorBox>

        );
    }
}


export default withAllBoards( BoardSelector );
