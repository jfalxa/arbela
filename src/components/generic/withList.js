import React from 'react';


function withList( generator )
{
    return function List( { className, ...props } )
    {
        const Item = generator( props );

        return (

            <ul className={ className }>

                { props.items.map( item => (

                    <Item key={ item.id } { ...item } />

                ) ) }

            </ul>

        );
    }
}


export default withList;
