import React, { useEffect, useState } from 'react'
import './Chat.css'
import './mediaQuery/chatQuery.css'
import {useParams} from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import ChatInput from './ChatInput.js'
import Message from './Message';
function Chat() {
    const {roomId}=useParams();

    const [roomDetailes,setRoomDetailes]=useState(null);
    const [roomMessages,setRoomMessages]=useState([])

    useEffect(()=>{

        db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
             setRoomDetailes(snapshot.data())
             
        })

        db.collection('rooms').doc(roomId)
        .collection('Messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot=>{
            setRoomMessages(snapshot.docs.map(doc=>doc.data()))
        })


    },[roomId])

console.log(roomMessages)
    
    return (
        <div className='chat'>
            

    <div className='chat__header'>
    <div className='chat__headerLeft'>

     <h4 className='chat__channelName'>
    <strong>{roomDetailes?.name}</strong>
         <StarBorderIcon/>
         </h4>   

    </div>
    <div className='chat__headerRight'>
        <p>
            <InfoOutlinedIcon/> Detailes
        </p>

    </div>
    </div>

    <div className='chat__messages'>

{roomMessages.map(({user,avatar,message,timestamp})=>
    <Message
    message={message}
    timestamp={timestamp}
    user={user}
    avatar={avatar}
    />
)}
    </div>

    <ChatInput channelName={roomDetailes?.name} channelId={roomId}/>
            
        </div>
    )
}

export default Chat
