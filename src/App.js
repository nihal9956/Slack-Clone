import React from 'react';
import Header from './Header'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './App.css';
import '../src/mediaQuery/appQuery.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './Login';
import { useSelector } from 'react-redux';
function App() {

  const user=useSelector(state=>state.user);
  return (
    <div className='app'>
       {!user?<Login/>:<Router>     
        <Header/>
      <div className='app-body'>
        <Sidebar/>
        <Switch>
          <Route path='/room/:roomId'>
          <Chat/>

          </Route>
          <Route path='/'>
            <div className='Welcome__Note'>
            <h1>Welcome To Slack </h1> <span className='logo'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png' alt='logo'/></span>
            <p>Create a new Channel or join one.</p>
            </div>
           

          </Route>
        
        </Switch>
      

      </div>
      </Router>
}
      
    </div>

      );
}

export default App;
