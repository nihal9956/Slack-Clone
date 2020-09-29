import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import './mediaQuery/sidebarQuery.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase'
import { useSelector } from 'react-redux';
function Sidebar() {

    const [channels,setchannel]=useState([])
    const user=useSelector(state=>state.user)

   useEffect(()=>{

    db.collection('rooms').onSnapshot(snapshot=>{
        setchannel(
            snapshot.docs.map(doc=>{
                return {
                    id:doc.id,
                    name:doc.data().name
                }
            })
        )
    })

   },[])

    return (
        <div className='sidebar'>
            
            <div className='sidebar-header'>
                <div className='sidebar-info'>
    <h2>{user?.email}</h2>
             

              <h3>
              <FiberManualRecordIcon/>
                  {user?.displayName}

              </h3>

                </div>
    
                <EditIcon/>
              
            </div>
          <SidebarOptions Icon={InsertCommentIcon} title={'Threads'}/>
          <SidebarOptions Icon={InboxIcon} title={'Mentions & reactions'}/>
          <SidebarOptions Icon={DraftsIcon} title={'Svaed items'}/>
          <SidebarOptions Icon={BookmarkBorderIcon} title={'Channel browser'}/>
          <SidebarOptions Icon={PeopleAltIcon} title={'People & user groups'}/>
          <SidebarOptions Icon={AppsIcon}title={'Apps'}/> 
          <SidebarOptions Icon={FileCopyIcon} title={'File browser'}/>
          <SidebarOptions Icon={ExpandLessIcon} title={'Show less'}/>

          <hr/>

          <SidebarOptions Icon={ExpandMoreIcon}title={'Show more'}/> 
          <hr/>
          <SidebarOptions Icon={AddIcon} addChannelOption title={'Channels'}/>
         
             {channels.map(channel=>{
                 return <SidebarOptions title={channel.name} id={channel.id}/>
             })}
        </div>
    )
}

export default Sidebar
