import React    from 'react';
import debounce from 'lodash/debounce';


// the idea is to have a stale state that contains older versions
// of the props and to override the new values coming from above
// with it.
function withDebounceProps( pickProps, timing=300 )
{
    return Component => class DebouncedComponent extends React.Component
    {
        constructor( props )
        {
            super();

            this.state = pickProps( props );
        }

        componentWillReceiveProps( nextProps )
        {
            this.updateProps( nextProps );
        }


        updateProps = debounce( nextProps =>
        {
            const debouncedProps = pickProps( nextProps );
            this.setState( debouncedProps );
        }, timing )


        render()
        {
            const debouncedProps = { ...this.props, ...this.state };

            return <Component { ...debouncedProps } />;
        }
    }
};


export default withDebounceProps;
