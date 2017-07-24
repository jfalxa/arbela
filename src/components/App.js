import React           from 'react';
import { Link, Route } from 'react-router-dom';
import PostList        from './post/PostList';
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
                    <Route exact path="/" component={ PostList } />
                    <Route path="/create" component={ PostCreator } />
                    <Route path="/edit/:id" component={ PostEditor } />
                    <Route path="/register" component={ UserRegister } />
                    <Route path="/login" component={ UserLogin } />
                </main>

            </div>

        );
    }
}

