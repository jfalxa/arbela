import styled     from 'styled-components';
import { Link }   from 'react-router-dom';
import * as theme from '../../style/theme';


const NavLink = styled( Link )`

    margin: 0 5px;

    font-family: ${ theme.titleFont };

`;


export default NavLink;



