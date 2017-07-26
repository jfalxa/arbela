import React         from 'react';
import Box           from '../utilities/Box';
import Loader        from '../utilities/Loader';
import withAllBoards from '../../graphcool/board/allBoards';
import CheckboxGroup from '../utilities/CheckboxGroup';


const BoardSelectorBox = Box.withComponent( CheckboxGroup ).extend`

`;


function BoardCheckbox( { value, title, name, checked, onChange } )
{
    return (

        <label>

            <input
                type="checkbox"
                name={ name }
                value={ value }
                checked={ checked }
                onChange={ onChange } />

            { title }

        </label>
    )
}


class BoardSelector extends React.Component
{
    render()
    {
        if ( this.props.loading )
        {
            return <Loader />;
        }

        const { boards, selection, onCheck } = this.props;

        return (

            <BoardSelectorBox flex column
                name="boards"
                checked={ selection }
                onCheck={ onCheck }>

                <legend>Boards</legend>

                { boards.map( board => (

                    <BoardCheckbox
                        key={ board.id }
                        value={ board.id }
                        { ...board } />

                ) ) }

            </BoardSelectorBox>

        );
    }
}


export default withAllBoards( BoardSelector );
