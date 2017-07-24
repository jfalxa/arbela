import React        from 'react';
import { Route }    from 'react-router-dom';
import Box          from './utilities/Box';
import PostFeed     from './post/PostFeed';
import UserPostFeed from './post/UserPostFeed';
import PostCreator  from './post/PostCreator';
import PostEditor   from './post/PostEditor';
import UserRegister from './auth/UserRegister';
import UserLogin    from './auth/UserLogin';
import Topbar       from './Topbar';


export default class App extends React.Component
{
    render()
    {
        return (

            <Box flex column>

                <Topbar />

                <main>
                    <Route exact path="/" component={ PostFeed } />
                    <Route exact path="/register" component={ UserRegister } />
                    <Route exact path="/login" component={ UserLogin } />
                    <Route exact path="/create" component={ PostCreator } />
                    <Route exact path="/edit/:id" component={ PostEditor } />
                    <Route exact path="/users/:name" component={ UserPostFeed } />
                </main>

            </Box>

        );
    }
}

