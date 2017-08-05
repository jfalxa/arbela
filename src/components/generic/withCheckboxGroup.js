import React   from 'react';
import union   from 'lodash/union';
import without from 'lodash/without';


function withCheckboxGroup( Component )
{
    return function CheckboxGroup( { checked, onCheck, ...otherProps } )
    {
        const handleCheck = ( e ) =>
        {
            const newChecked = e.target.checked
                ? union( checked, [e.target.value] )
                : without( checked, e.target.value );

            onCheck( newChecked );
        }

        return (

            <Component { ...otherProps }
                checked={ checked }
                onCheck={ handleCheck } />

        );
    }
}


export default withCheckboxGroup;
