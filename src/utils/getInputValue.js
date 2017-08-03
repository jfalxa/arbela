export default function getInputValue( input )
{
    if ( input.type === 'checkbox' )
    {
        return input.checked;
    }

    return input.value;
}
