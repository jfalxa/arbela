import React from 'react';


function withList( generator )
{
    return function List( props )
    {
        const Item = generator( props );

        return (

            <ul>

                { props.items.map( item => (

                    <Item key={ item.id } { ...item } />

                ) ) }

            </ul>

        );
    }
}


export default withList;
