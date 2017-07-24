import { injectGlobal } from 'styled-components';

import * as theme from './theme';


injectGlobal`

    html, body
    {
        margin: 0;
        padding: 0;
    }


    *
    {
        box-sizing: border-box;

        color: ${ theme.primaryText };
        font-family: ${ theme.bodyFont };
    }


    #root
    {
        display: flex;
        min-height: 100%;
        background-color: ${ theme.lightBackground };
    }
`;
