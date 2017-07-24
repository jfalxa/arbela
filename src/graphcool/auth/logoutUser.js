export default function logoutUser()
{
    localStorage.removeItem( 'graphcoolToken' );
    window.location.reload();
}
