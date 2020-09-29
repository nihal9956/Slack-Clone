import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_USER } from './actionType/actionType';
import { auth,provider } from './firebase'
import './Login.css'
function Login() {

   
    const dispatch=useDispatch();
    
    
    const signIn=()=>{
       auth 
       .signInWithPopup(provider)
       .then (result=>{
   console.log(result)

   dispatch({
       type:SET_USER,
       user:result.user
   })
       })
       .catch(error=>{
           alert(error.message)
       })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png' alt='logo'/>
           
           <h1>Sign in to Slack HQ</h1>
           <p>nihaltiwari.slack.com</p>
           <button onClick={signIn}>Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login
