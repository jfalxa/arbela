import styled     from 'styled-components';
import { Link }   from 'react-router-dom';
import * as theme from '../../style/theme';


const ButtonLink = styled( Link )`

    margin: 5px 0;

    height: 30px;
    width: 300px;

    text-align: center;
    color: ${ theme.secondaryText };

    outline: 0;

    &:hover
    {
        color: ${ theme.primaryText };
    }
`;


export default ButtonLink;
