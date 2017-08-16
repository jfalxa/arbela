import React                 from 'react';
import { Route }             from 'react-router-dom';
import Box                   from './generic/Box';
import Navigation            from './Navigation';
import CreateBoard           from './boards/CreateBoard';
import ShowBoardSearch       from './boards/ShowBoardSearch';
import ShowUserBoards        from './boards/ShowUserBoards';
import ShowBoard             from './boards/ShowBoard';
import EditBoard             from './boards/EditBoard';
import PostBoardLink         from './boards/PostBoardLink';
import FeedLinks             from './links/FeedLinks';
import PostLink              from './links/PostLink';
import EditLink              from './links/EditLink';
import ShareLink             from './links/ShareLink';
import ManageBoardMembers    from './boards/ManageBoardMembers';
import LoginUser             from './auth/LoginUser';
import RegisterUser          from './auth/RegisterUser';


const Main = Box.withComponent( 'main' );


function App()
{
    return (

        <div>

            <Navigation />

            <Main justify="center">

                <Route exact path="/" component={ FeedLinks } />

                <Route exact path="/boards" component={ ShowBoardSearch } />
                <Route path="/new-board" component={ CreateBoard } />
                <Route path="/users/:name" component={ ShowUserBoards } />
                <Route exact path="/boards/:slug" component={ ShowBoard } />
                <Route path="/boards/:slug/edit" component={ EditBoard } />
                <Route path="/boards/:slug/new-link" component={ PostBoardLink } />
                <Route path="/boards/:slug/members" component={ ManageBoardMembers } />

                <Route path="/new-link" component={ PostLink } />
                <Route path="/links/:id/edit" component={ EditLink } />
                <Route path="/links/:id/share" component={ ShareLink } />

                <Route path="/login" component={ LoginUser } />
                <Route path="/register" component={ RegisterUser } />

            </Main>

        </div>

    );
}


export default App;
