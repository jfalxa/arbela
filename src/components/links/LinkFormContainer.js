import React         from 'react';
import pick          from 'lodash/pick';
import LinkForm      from './LinkForm';
import getInputValue from '../../utils/getInputValue';


class LinkFormContainer extends React.Component
{
    constructor( props )
    {
        super();

        this.state =
        {
            title       : props.title || '',
            url         : props.url || '',
            description : props.description || ''
        };
    }


    componentWillReceiveProps( nextProps )
    {
        const formProps = pick( nextProps, ['title', 'url', 'description'] );
        this.setState( formProps );
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
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default LinkFormContainer;
