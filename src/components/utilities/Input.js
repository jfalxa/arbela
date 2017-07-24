import styled     from 'styled-components';
import * as theme from '../../style/theme';


const Input = styled.input`

    min-width: 300px;
    height: 40px;

    margin: 10px 0;
    padding: 10px;

    border: 0;
    border-left: 1px solid ${ theme.background };
    outline: 0;

    font-size: 1em;

    &:focus
    {
        border-bottom-color: ${ theme.darkBackground };
    }

`;


export default Input;
