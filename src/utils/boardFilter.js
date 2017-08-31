export function filterUser( user )
{
    if ( !user )
    {
        // as long as the user is not authenticated, only show public boards
        return { hidden: false };
    }

    // when logged in also show hidden boards that the user owns
    const userFilter =
    {
        OR:
        [
            { hidden: false },
            { owner: { id: user.id } }
        ]
    };

    return userFilter;
}


export function filterSearch( search )
{
    const tokens = search.split( ' ' );

    const titleFilter       = tokens.map( token => ( { title_contains: token } ) );
    const descriptionFilter = tokens.map( token => ( { description_contains: token } ) );

    return { OR: [...titleFilter, ...descriptionFilter] };
}

