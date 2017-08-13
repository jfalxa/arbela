import React          from 'react';
import { parse }      from 'query-string';
import { compose }    from 'react-apollo';
import { withRouter } from 'react-router-dom';


function withQueryParams( Component )
{
    return function QueryParamsComponent( props )
    {
        const queryParams = parse( props.location.search );

        return (

            <Component { ...props }
                queryParams={ queryParams } />

        );
    }
}


export default compose( withRouter, withQueryParams );
