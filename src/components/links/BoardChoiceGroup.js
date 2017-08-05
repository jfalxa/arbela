import React             from 'react';
import includes          from 'lodash/includes';
import withList          from '../generic/withList';
import withCheckboxGroup from '../generic/withCheckboxGroup';


function BoardChoice( { id, title, description, checked, onCheck } )
{
    const boardID = `board-${ id }`;

    return (

        <li>

            <input
                id={ boardID }
                type="checkbox"
                value={ id }
                checked={ checked }
                onChange={ onCheck } />

            <label htmlFor={ boardID  }>
                { title }
            </label>

        </li>

    );
}


const BoardChoiceList = withList( props => item => (

    <BoardChoice { ...item }
        checked={ includes( props.checked, item.id ) }
        onCheck={ props.onCheck } />

) );


export default withCheckboxGroup( BoardChoiceList );

