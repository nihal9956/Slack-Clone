import React,{useState} from 'react'
import './ChatInput.css'
import './mediaQuery/chatinputQuery.css'
import firebase from 'firebase'
import db from './firebase'
import { useSelector } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import {Button} from '@material-ui/core'
function ChatInput({channelName,channelId}) {

    const [Input,setInput]=useState('');
    const user=useSelector(state=>state.user)
    
    const sendMessage=(e)=>{

        e.preventDefault();
        setInput('')
        if(channelId){
 db.collection('rooms').doc(channelId).collection('Messages').add({

     message:Input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
     user:user.displayName,
     avatar:user.photoURL

 })

}

    }


  
 return (
        <div className='chat__input'>
            <input value={Input}
            onChange={e=>setInput(e.target.value)}
            placeholder="Type a message"
            />
            <Button type='submit' onClick={sendMessage} className='button'>
                <SendIcon className='btn'/>
            </Button>
           
           
        </div>
    )
    
   
}

export default ChatInput
