import { compose }    from 'react-apollo';
import withPost       from './post';
import withUpdatePost from './updatePost';
import withDeletePost from './deletePost';


export default compose( withPost, withUpdatePost, withDeletePost );
