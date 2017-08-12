import React                 from 'react';
import { Route }             from 'react-router-dom';
import Box                   from './generic/Box';
import Navigation            from './Navigation';
import CreateBoard           from './boards/CreateBoard';
import ShowAllBoards         from './boards/ShowAllBoards';
import ShowSessionUserBoards from './boards/ShowSessionUserBoards';
import ShowUserBoards        from './boards/ShowUserBoards';
import ShowBoard             from './boards/ShowBoard';
import EditBoard             from './boards/EditBoard';
import PostBoardLink         from './boards/PostBoardLink';
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

            <Main justifyCenter>

                <Route exact path="/" component={ ShowSessionUserBoards } />

                <Route path="/new-board" component={ CreateBoard } />
                <Route exact path="/boards" component={ ShowAllBoards } />
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
