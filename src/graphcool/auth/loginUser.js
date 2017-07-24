import { compose }    from 'react-apollo';
import withUser       from './user';
import withSigninUser from './signinUser';


export default compose( withUser, withSigninUser );
