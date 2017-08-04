import React              from 'react';
import { Link }           from 'react-router-dom';
import { cleanAuthToken } from '../../services/graphcool/token';


function logout()
{
    cleanAuthToken();
    window.location.reload();
}


function LogoutUser()
{
    return (

        <Link to="/" onClick={ logout }>Logout</Link>

    );
}


export default LogoutUser;
