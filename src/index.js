import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

// COMPONENTS
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profiles'
import PostItem from './components/post_item'
import Life from "./components/life";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br/>
                    <NavLink
                        to='/posts'
                        activeStyle={{color:'red'}}>
                        Posts
                    </NavLink><br/>
                    <NavLink to='/profile'>Profile</NavLink><br/>
                    <NavLink to='/life'>Life</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path='/posts/:id/:username' component={PostItem}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/life' component={Life}/>
                    <Route path='/' exact component={Home}/>
                    <Route render={() => <h3>404</h3>}/>
                </Switch>

            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
