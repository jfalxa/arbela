import React         from 'react';
import BoardForm     from './BoardForm';
import getInputValue from '../../utils/getInputValue';


class BoardFormContainer extends React.Component
{
    constructor( props )
    {
        super();

        this.state =
        {
            title       : props.title || '',
            description : props.description || '',
            hidden      : props.hidden || false
        };
    }


    componentWillReceiveProps( { title, description, hidden=false } )
    {
        this.setState( { title, description, hidden } );
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
        const { title, description, hidden } = this.state;

        return (

            <BoardForm
                title={ title }
                description={ description }
                hidden={ hidden }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default BoardFormContainer;
