import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friendlist' component={AddFriend} />
      <PrivateRoute exact path='/friendlist' component={FriendList} />
      <Footer />
    </div>
  );
}

export default App;
