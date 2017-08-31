export function getLinkAccess( link, user )
{
    const hasUser = Boolean( user );
    const hasLink = Boolean( link );

    const access =
    {
        isAuth   : hasUser,
        isAuthor : hasLink && hasUser && ( link.author.id === user.id ),
        canVote  : hasUser && hasLink && ( link.voted.count === 0 )
    };

    return access;
}


export function mapLinkAccess( links, user )
{
    return links.map( link => (
        { ...link, access: getLinkAccess( link, user ) }
    ) );
}

