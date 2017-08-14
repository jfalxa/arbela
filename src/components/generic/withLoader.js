import React from 'react';


function withLoader( isLoading )
{
    return Component => function LoaderComponent( props )
    {
        return isLoading( props )
            ? <p>Loading...</p>
            : <Component { ...props } />;
    }
}


export default withLoader;

