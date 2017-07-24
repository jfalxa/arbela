import styled     from 'styled-components';
import * as theme from '../../style/theme';


const TextArea = styled.textarea`

    margin: 10px 0;
    padding: 10px;

    height: 200px;

    border: 0;
    border-left: 1px solid ${ theme.background };
    outline: none;

    font-size: 1em;
`;


export default TextArea;
