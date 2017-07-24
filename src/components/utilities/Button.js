import styled     from 'styled-components'; import * as theme from '../../style/theme';

const Button = styled.button`

    height: 30px;
    width: 300px;
    margin: 5px 0;

    border: 1px solid ${ theme.darkBackground };
    outline: 0;

    font-size: 1em;

    background-color: ${ theme.lightBackground };

    &:hover
    {
        background-color: ${ theme.background };
    }

    &:active
    {
        background-color: ${ theme.darkBackground };
        color: ${ theme.lightBackground };
        border-color: ${ theme.lightBackground };
    }

`;


export default Button;
