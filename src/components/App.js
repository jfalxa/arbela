import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import Box               from './generic/Box';
import Navigation        from './Navigation';
import CreateBoard       from './boards/CreateBoard';
import ShowBoardSearch   from './boards/ShowBoardSearch';
import ShowUserBoards    from './boards/ShowUserBoards';
import ShowBoard         from './boards/ShowBoard';
import PostLink          from './links/PostLink';
import LoginUser         from './auth/LoginUser';
import RegisterUser      from './auth/RegisterUser';


const Main = Box.withComponent( 'main' );


function App()
{
    return (

        <div>

            <Navigation />

            <Main justify="center">

                <Route exact path="/" component={ ShowBoardSearch } />

                <Switch>
                    <Route path="/new-board" component={ CreateBoard } />
                    <Route path="/new-link" component={ PostLink } />
                    <Route path="/login" component={ LoginUser } />
                    <Route path="/register" component={ RegisterUser } />
                    <Route exact path="/boards/:slug" component={ ShowBoard } />
                    <Route path="/:user" component={ ShowUserBoards } />
                </Switch>

            </Main>

        </div>

    );
}


export default App;
