export default function authMiddleware( req, next )
{
    if ( !req.options.headers )
    {
        req.options.headers = {};
    }

    // get the authentication token from local storage if it exists
    if ( localStorage.getItem( 'graphcoolToken' ) )
    {
        req.options.headers.authorization = `Bearer ${ localStorage.getItem( 'graphcoolToken' ) }`;
    }

    next();
}
