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
            if ( this.isTargeted() )
            {
                findDOMNode( this ).scrollIntoView();
            }
        }


        isTargeted()
        {
            const el   = findDOMNode( this );
            const id   = el ? el.id : this.props.id;
            const hash = this.props.location.hash.slice( 1 );

            return ( hash === id );
        }


        render()
        {
            return <Component { ...this.props } targeted={ this.isTargeted() } />;
        }
    }
}


export default compose( withRouter, withAutoScroll );
