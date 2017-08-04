import React         from 'react';
import LinkForm      from './LinkForm';
import getInputValue from '../../utils/getInputValue';


class LinkFormContainer extends React.Component
{
    constructor( props )
    {
        super();

        this.state =
        {
            title       : props.title,
            url         : props.url,
            description : props.description,
            hidden      : props.hidden
        };
    }


    componentWillReceiveProps( { title, url, description, hidden } )
    {
        this.setState( { title, url, description, hidden } );
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
        const { title, url, description, hidden } = this.state;

        return (

            <LinkForm
                title={ title }
                url={ url }
                description={ description }
                hidden={ hidden }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default LinkFormContainer;
