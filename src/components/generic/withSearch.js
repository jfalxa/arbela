import React                from 'react';
import { parse, stringify } from 'query-string';
import { compose }          from 'react-apollo';
import { withRouter }       from 'react-router-dom';


function withSearch( Component )
{
    return class SearchComponent extends React.Component
    {
        constructor( props )
        {
            super();

            this.state =
            {
                search : this.getSearch( props )
            };
        }


        componentWillReceiveProps( nextProps )
        {
            this.setState( { search: this.getSearch( nextProps ) } );
        }


        getSearch( props )
        {
            return parse( props.location.search ).q || '';
        }


        handleSearch = ( e ) =>
        {
            const search = e.target.value;

            const path = search
                ? `?${ stringify( { q: search } ) }`
                : this.props.location.path;

            this.props.history.replace( path );
        }


        render()
        {
            return (

                <Component { ...this.props }
                    search={ this.state.search }
                    onSearch={ this.handleSearch } />

            );
        }
    }
}


export default compose( withRouter, withSearch );
