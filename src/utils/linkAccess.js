export function getLinkAccess( link, user )
{
    const hasUser = Boolean( user );
    const hasLink = Boolean( link );

    const access =
    {
        isAuth   : hasUser,
        hasVoted : hasLink && ( link.voted.count === 1 ),
        isAuthor : hasLink && hasUser && ( link.author.id === user.id )
    };

    return access;
}


export function mapLinkAccess( links, user )
{
    return links.map( link => (
        { ...link, access: getLinkAccess( link, user ) }
    ) );
}


export function canVote( access )
{
    return access.isAuth && !access.hasVoted;
}
