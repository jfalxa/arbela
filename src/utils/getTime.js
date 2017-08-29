import isToday  from 'date-fns/is_today';
import format   from 'date-fns/format';
import distance from 'date-fns/distance_in_words_to_now';


function getTime( date )
{
    return isToday( date )
        ? distance( date ) + ' ago'
        : format( date, 'MMM DD, YYYY' );
}


export default getTime;
