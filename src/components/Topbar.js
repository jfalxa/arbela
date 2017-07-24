import React      from 'react';
import * as theme from '../style/theme';
import UserLink   from './auth/UserLink';
import NavBox     from './utilities/NavBox';
import NavLink    from './utilities/NavLink';


const TopNavBox = NavBox.extend`

    width: 100%;
    padding: 10px 20px;
    background-color: ${ theme.lightBackground };
    box-shadow: 0px 0px 2px ${ theme.darkBackground };

`;


export default function Topbar()
{
    return (

        <TopNavBox flex justifySpaceBetween alignCenter>

            <NavBox>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create</NavLink>
            </NavBox>

            <UserLink />

        </TopNavBox>

    );
}
