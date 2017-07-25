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


const MainBox = Box.withComponent( 'main' ).extend`

    padding: 0 100px;
    margin-top: 100px;

`


export default class App extends React.Component
{
    render()
    {
        return (

            <Box flex column>

                <Topbar />

                <MainBox flex>
                    <Route exact path="/" component={ PostFeed } />
                    <Route exact path="/register" component={ UserRegister } />
                    <Route exact path="/login" component={ UserLogin } />
                    <Route exact path="/create" component={ PostCreator } />
                    <Route exact path="/edit/:id" component={ PostEditor } />
                    <Route exact path="/users/:name" component={ UserPostFeed } />
                </MainBox>

            </Box>

        );
    }
}

