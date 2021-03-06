import React           from 'react';
import defaults        from 'lodash/defaults';
import kebabCase       from 'lodash/kebabCase';
import BoardForm       from './BoardForm';
import getInputValue   from '../../utils/getInputValue';
import withQueryParams from '../generic/withQueryParams';


class BoardFormContainer extends React.Component
{
    state =
    {
        title       : '',
        slug        : '',
        description : '',
        hidden      : false
    }


    constructor( props )
    {
        super();

        this.state = this.getBoard( props );
    }


    getBoard( props )
    {
        return defaults( props.board, props.queryParams, this.state );
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( this.getBoard( nextProps ) );
    }


    handleChange = ( e ) =>
    {
        const field = e.target.name;
        const value = getInputValue( e.target );

        // fill the slug automatically based on the title
        if ( field === 'title' && !this.props.board )
        {
            this.setState( { title: value, slug: kebabCase( value ) } );
        }
        else
        {
            this.setState( { [field]: value } );
        }
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();
        this.props.onSubmit( this.state );
    }


    render()
    {
        const { title, slug, description, hidden } = this.state;

        return (

            <BoardForm
                title={ title }
                slug={ slug }
                description={ description }
                hidden={ hidden }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withQueryParams( BoardFormContainer );
