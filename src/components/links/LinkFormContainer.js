import React         from 'react';
import defaults      from 'lodash/defaults';
import LinkForm      from './LinkForm';
import getInputValue from '../../utils/getInputValue';


class LinkFormContainer extends React.Component
{
    state =
    {
        title       : '',
        url         : '',
        description : ''
    }


    constructor( props )
    {
        super();

        this.state = this.getLink( props );
    }


    getLink( props )
    {
        return defaults( props.link, this.state );
    }


    componentWillReceiveProps( nextProps )
    {
        if ( nextProps.link !== this.props.link )
        {
            this.setState( this.getLink( nextProps ) );
        }
    }


    handleChange = ( e ) =>
    {
        const field = e.target.name;
        const value = getInputValue( e.target );

        this.setState( { [field]: value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();
        this.props.onSubmit( this.state );
    }


    render()
    {
        const { title, url, description } = this.state;

        return (

            <LinkForm
                title={ title }
                url={ url }
                description={ description }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit }
                children={ this.props.children } />

        );
    }
}


export default LinkFormContainer;
