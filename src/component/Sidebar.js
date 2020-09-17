import React from 'react'
import '../css/Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core//IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar"
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="Sidebar">

         <div class="sidebar__header">
         <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
             <div className="sidebar__headerRight">
                 <IconButton>
                 <DonutLargeIcon
                 />
                 </IconButton>
                 <IconButton>
                 <ChatIcon
                  />
                 </IconButton>
                 <IconButton>
                 <MoreVertIcon
                  />
                 </IconButton>
                 
             </div>
         </div>
         <div className="sidebar__search">
             <div className="sidebar__searchContainer">
               <SearchOutlined/>
               <input type="text"/>
             </div>

         </div>
         <div className="sidebar__chats">
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>   
         </div>
        </div>
    )
}

export default Sidebar
