import React from 'react'
import './Message.css'

function Message({message,timestamp,user,avatar}) {
    return (
        <div className='message'>
            <img src={avatar} alt="Dp"/>

            <div className='message__info'>
    <h4>{user} <span className='message__timeStamp'>{new Date(timestamp?.toDate()).toLocaleString()}</span></h4>
    <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Message
