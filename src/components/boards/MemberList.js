import React    from 'react';
import { Link } from 'react-router-dom';
import withList from '../generic/withList';


const MemberList = withList( props => member => (

    <li>
        <Link to={ `/users/${ member.name }` }>{ member.name }</Link>
        <button onClick={ e => props.onRemoveMember( member.id ) }>Remove</button>
    </li>

) );


export default MemberList;

