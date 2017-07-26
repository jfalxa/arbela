import React     from 'react';
import keys      from 'lodash/keys';
import times     from 'lodash/times';
import pickBy    from 'lodash/pickBy';
import zipObject from 'lodash/zipObject';


const toCheckList  = checkIndex => keys( pickBy( checkIndex ) );
const toCheckIndex = checkList => zipObject( checkList, times( checkList.length, () => true ) );


export default class CheckboxGroup extends React.Component
{
    constructor( props )
    {
        super();

        this.state =
        {
            checked : toCheckIndex( props.checked )
        };
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( { checked: toCheckIndex( nextProps.checked ) } );
    }


    handleChange = ( e ) =>
    {
        const checked =
        {
            ...this.state.checked,
            [e.target.value] : e.target.checked
        };

        this.setState( { checked } );
        this.props.onCheck( toCheckList( checked ) );
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
                checked : this.state.checked[child.props.value]
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

