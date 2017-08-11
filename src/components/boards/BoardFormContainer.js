import React         from 'react';
import defaults      from 'lodash/defaults';
import BoardForm     from './BoardForm';
import getInputValue from '../../utils/getInputValue';


class BoardFormContainer extends React.Component
{
    state =
    {
        title       : '',
        description : '',
        hidden      : false,
        closed      : false
    }


    constructor( props )
    {
        super();

        this.state = this.getBoard( props );
    }


    getBoard( props )
    {
        return defaults( props.board, this.state );
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( this.getBoard( nextProps ) );
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
