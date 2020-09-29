import React from 'react'
import { useHistory } from 'react-router-dom'
import db from './firebase'
import './SidebarOptions.css'
import './mediaQuery/sidebaroptionQuery.css'
function SidebarOptions({Icon,addChannelOption,id,title}) {
const history=useHistory()
    const selectChannel=()=>{
        if(id){
            
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }


    const addChannel=()=>{
      const channelName=prompt('please enter Channel Name')

      if(channelName){
          db.collection('rooms').add({
              name:channelName
          })
      }
    }
    return (
        <div className='SidebarOptions' onClick={addChannelOption?addChannel:selectChannel}>
          {Icon&&<Icon className='SidebarOptions-icon'/>}
          {Icon?(
              <h3>{title}</h3>
              
          ):<h3 className='SidebarOptions-channel'><span className='SidebarOptions-hastag'>#</span> {title}</h3>}
            
        </div>
    )
}

export default SidebarOptions
