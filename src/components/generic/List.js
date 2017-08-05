import React from 'react';


function List( generator )
{
    return props =>
    {
        const createItem = generator( props );

        const renderItem = item =>
        {
            const element = createItem( item );
            return React.cloneElement( element, { key: item.id } );
        }

        return (

            <ul>
                { props.items.map( renderItem ) }
            </ul>

        )
    }
}


export default List;
