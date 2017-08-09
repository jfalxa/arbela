import React        from 'react';
import MemberForm   from './MemberForm';
import withFindUser from './withFindUser';


class MemberFormContainer extends React.Component
{
    handleChange = ( e ) =>
    {
        this.props.onSearchUser( e.target.value );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { foundUser, onSearchUser, onAddMember } = this.props;

        if ( !foundUser )
        {
            return console.log( 'User does not exist' );
        }

        onSearchUser( '' );
        onAddMember( foundUser.id );
    }


    render()
    {
        return (

            <MemberForm
                value={ this.props.searchedUser }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withFindUser( MemberFormContainer );
