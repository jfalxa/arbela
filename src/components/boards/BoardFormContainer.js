import React         from 'react';
import pick          from 'lodash/pick';
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
            hidden      : props.hidden || false,
            closed      : props.closed || false
        };
    }


    componentWillReceiveProps( nextProps )
    {
        const formProps = pick( nextProps, ['title', 'description', 'hidden', 'closed'] );
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
        const { title, description, hidden, closed } = this.state;

        return (

            <BoardForm
                title={ title }
                description={ description }
                hidden={ hidden }
                closed={ closed }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default BoardFormContainer;
