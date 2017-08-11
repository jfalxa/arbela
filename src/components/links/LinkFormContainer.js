import React         from 'react';
import pick          from 'lodash/pick';
import LinkForm      from './LinkForm';
import getInputValue from '../../utils/getInputValue';


class LinkFormContainer extends React.Component
{
    constructor( props )
    {
        super();

        this.state = this.getLink( props );
    }


    getLink( props )
    {
        return pick( props.link, ['title', 'url', 'description'] );
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( this.getLink( nextProps ) );
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
