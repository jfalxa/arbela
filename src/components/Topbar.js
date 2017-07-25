import React      from 'react';
import * as theme from '../style/theme';
import UserLink   from './auth/UserLink';
import NavBox     from './utilities/NavBox';
import NavLink    from './utilities/NavLink';


const TopNavBox = NavBox.extend`

    position: fixed;
    width: 100%;
    padding: 15px 100px;
    background-color: ${ theme.lightBackground };
    box-shadow: 0px 0px 2px ${ theme.darkBackground };

`;


export default function Topbar()
{
    return (

        <TopNavBox justifySpaceBetween alignCenter>

            <NavBox>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/boards">Boards</NavLink>
                <NavLink to="/create">New Post</NavLink>
            </NavBox>

            <UserLink />

        </TopNavBox>

    );
}
