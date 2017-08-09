import React               from 'react';
import { Link }            from 'react-router-dom';
import MemberFormContainer from './MemberFormContainer';
import MemberList          from './MemberList';


function BoardMembers( { board, owner, members, searchedUser, loadingMembers, onSearchUser, onAddMember, onRemoveMember } )
{
    if ( loadingMembers )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>

            <h2>{ board.title } members</h2>

            <h3>Owner</h3>
            <p><Link to={ `/users/${ owner.name }` }>{ owner.name }</Link></p>

            <h3>Members</h3>

            <MemberFormContainer
                searchedUser={ searchedUser }
                onSearchUser={ onSearchUser }
                onAddMember={ onAddMember } />

            <MemberList
                items={ members }
                onRemoveMember={ onRemoveMember } />

        </section>

    );
}


export default BoardMembers;
