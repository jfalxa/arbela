import React from 'react';


function List( Item )
{
    return ( { items } ) =>
    (

        <ul>

            { items.map( item => (

                <Item
                    key={ item.id }
                    { ...item } />

            ) ) }

        </ul>

    );
}


export default List;
