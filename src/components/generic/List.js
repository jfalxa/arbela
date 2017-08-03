import React from 'react';


function List( { data, renderItem:Item } )
{
    return (

        <ul>

            { data.map( data => (

                <Item
                    key={ data.id }
                    { ...data } />

            ) ) }

        </ul>

    );
}


export default List;
