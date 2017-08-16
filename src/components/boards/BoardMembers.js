import React               from 'react';
import { Link }            from 'react-router-dom';
import Page                from '../generic/Page';
import MemberFormContainer from './MemberFormContainer';
import MemberList          from './MemberList';


function BoardMembers( { board, members, searchedUser, onSearchUser, onAddMember, onRemoveMember } )
{
    return (

        <Page title={ `${ board.title } members` }>

            <h3>Owner</h3>
            <p><Link to={ `/users/${ board.owner.name }` }>{ board.owner.name }</Link></p>

            <h3>Members</h3>

            <MemberFormContainer
                searchedUser={ searchedUser }
                onSearchUser={ onSearchUser }
                onAddMember={ onAddMember } />

            <MemberList
                items={ members }
                onRemoveMember={ onRemoveMember } />

        </Page>

    );
}


export default BoardMembers;
