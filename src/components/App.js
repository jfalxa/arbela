import React           from 'react';
import { Link, Route } from 'react-router-dom';
import PostFeed        from './post/PostFeed';
import UserPostFeed    from './post/UserPostFeed';
import PostCreator     from './post/PostCreator';
import PostEditor      from './post/PostEditor';
import UserLink        from './auth/UserLink';
import UserRegister    from './auth/UserRegister';
import UserLogin       from './auth/UserLogin';


export default class App extends React.Component
{
    render()
    {
        return (

            <div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                    <UserLink />
                </nav>

                <main>
                    <Route exact path="/" component={ PostFeed } />
                    <Route exact path="/register" component={ UserRegister } />
                    <Route exact path="/login" component={ UserLogin } />
                    <Route exact path="/create" component={ PostCreator } />
                    <Route exact path="/edit/:id" component={ PostEditor } />
                    <Route exact path="/users/:name" component={ UserPostFeed } />
                </main>

            </div>

        );
    }
}

