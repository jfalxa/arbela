import React           from 'react';
import { findDOMNode } from 'react-dom';
import { compose }     from 'react-apollo';
import { withRouter }  from 'react-router-dom';


function withAutoScroll( Component )
{
    return class ScrolledComponent extends React.Component
    {
        componentDidMount()
        {
            const el   = findDOMNode( this );
            const hash = this.props.location.hash;

            if ( el.id === hash.slice( 1 ) )
            {
                el.scrollIntoView();
            }
        }


        render()
        {
            return <Component { ...this.props } />;
        }
    }
}


export default compose( withRouter, withAutoScroll );
