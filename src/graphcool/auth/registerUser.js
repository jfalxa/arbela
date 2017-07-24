import { compose }    from 'react-apollo';
import withUser       from './user';
import withCreateUser from './createUser';
import withSigninUser from './signinUser';


export default compose( withCreateUser, withUser, withSigninUser );
