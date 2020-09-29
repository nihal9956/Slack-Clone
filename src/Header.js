import React from 'react'
import './Header.css'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';


function Header() {
  const user=useSelector(state=>state.user)
    return (
        <div className='header'>
            <div className='header-left'>
              <Avatar alt={user?.displayName}
               src={user?.photoURL}
              
              />
              <QueryBuilderIcon/>
            </div>
            <div className='header-center'>
          <SearchIcon/>
          <input type='text' placeholder='Search room name'/>
            </div>
            <div className='header-left'>
        <HelpIcon/>
            </div>

        </div>
    )
}

export default Header
