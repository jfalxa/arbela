export function getBoardAccess( board, user )
{
    const access =
    {
        isAuth   : Boolean( user ),
        isMember : board._membersMeta.count === 1,
        isOwner  : Boolean( user ) && ( board.owner.id === user.id )
    };

    return access;
}


export function mapBoardAccess( boards, user )
{
    return boards.map( board => (
        { ...board, access: getBoardAccess( board, user ) }
    ) );
}


export function hasAccess( access )
{
    return ( access.isOwner || access.isMember );
}


export function canJoin( access, board )
{
    return ( access.isAuth && !hasAccess( access ) );
}


export function canLeave( access )
{
    return ( access.isAuth && access.isMember );
}

