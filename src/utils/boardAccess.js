export function getBoardAccess( board, user )
{
    const hasUser  = Boolean( user );
    const hasBoard = Boolean( board );

    const access =
    {
        isAuth   : hasUser,
        isMember : hasBoard && board._membersMeta.count === 1,
        isOwner  : hasBoard && hasUser && ( board.owner.id === user.id )
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

