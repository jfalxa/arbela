export function getBoardAccess( board, user )
{
    const hasUser  = Boolean( user );
    const hasBoard = Boolean( board );

    const access =
    {
        isAuth  : hasUser,
        isOwner : hasBoard && hasUser && ( board.owner.id === user.id )
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

