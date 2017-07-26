import React  from 'react';
import keys   from 'lodash/keys';
import pickBy from 'lodash/pickBy';


const listChecked = checked => keys( pickBy( checked ) );


export default class CheckboxGroup extends React.Component
{
    state = {}


    handleChange = ( e ) =>
    {
        const checked =
        {
            ...this.state,
            [e.target.value] : e.target.checked
        };

        this.setState( checked );
        this.props.onCheck( listChecked( checked ) );
    }


    renderCheckboxes()
    {
        const extraProps =
        {
            name     : this.props.name,
            onChange : this.handleChange
        };

        return React.Children.map( this.props.children, child =>
        {
            const props =
            {
                ...extraProps,
                checked : this.state[child.props.value]
            };

            return React.cloneElement( child, props );
        } );
    }


    render()
    {
        const { className } = this.props;

        return (

            <fieldset className={ className }>
                { this.renderCheckboxes() }
            </fieldset>

        );
    }
}

