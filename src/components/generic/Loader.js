import React from 'react';


function Loader( { loading, children } )
{
    return loading
        ? <p>Loading...</p>
        : React.Children.only( children );
}


export default Loader;

