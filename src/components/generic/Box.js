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


// Flexbox container for quick layouting.
// Configurable with props and extendable with custom styles.
const Box = styled.div`

    display:            ${ p => p.inline ? 'inline-flex' : 'flex' };
    box-sizing:         border-box;
    flex:               ${ flex };
    flex-direction:     ${ p => p.column ? 'column' : 'row' };
    justify-content:    ${ p => p.justify || 'initial' };
    align-items:        ${ p => p.align || 'initial' };
    align-self:         ${ p => p.alignSelf || 'initial' };

`;


export default Box;
