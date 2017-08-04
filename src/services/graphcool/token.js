export function setAuthToken( token )
{
    localStorage.setItem( 'graphcoolToken', token );
}


export function cleanAuthToken()
{
    localStorage.removeItem( 'graphcoolToken' );
}

