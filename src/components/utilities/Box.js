import styled from 'styled-components';


function flex( props )
{
    if ( props.flex === true )
    {
        return 1;
    }
    else if ( props.flex > 0 )
    {
        return props.flex;
    }

    return 'initial';
}


function justifyContent( props )
{
    if ( props.justifyStart )        return 'flex-start';
    if ( props.justifyEnd )          return 'flex-end';
    if ( props.justifyCenter )       return 'center';
    if ( props.justifySpaceBetween ) return 'space-between';
    if ( props.justifySpaceAround )  return 'space-around';
}


function alignItems( props )
{
    if ( props.alignCenter )   return 'center';
    if ( props.alignStart )    return 'flex-start';
    if ( props.alignEnd )      return 'flex-end';
    if ( props.alignStretch )  return 'stretch';
    if ( props.alignBaseline ) return 'baseline';
}


// Flexbox container for quick layouting.
// Configurable with props and extendable with custom styles.
const Box = styled.div`

    display:            ${ p => p.inline ? 'inline-flex' : 'flex' };
    box-sizing:         border-box;
    flex:               ${ flex };
    flex-direction:     ${ p => p.column ? 'column' : 'row' };
    justify-content:    ${ justifyContent };
    align-items:        ${ alignItems };

`;


export default Box;
