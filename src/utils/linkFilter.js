export function filterSearch( search )
{
    const tokens = search ? search.split( ' ' ) : [];

    const titleCriteria       = tokens.map( token => ( { title_contains: token } ) );
    const urlCriteria         = tokens.map( token => ( { url_contains: token } ) );
    const descriptionCriteria = tokens.map( token => ( { description_contains: token } ) );

    return { OR: [...titleCriteria, ...urlCriteria, ...descriptionCriteria] };
}

