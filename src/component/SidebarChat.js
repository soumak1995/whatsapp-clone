import React from 'react'
import '../css/SidebarChat.css'
import Avatar from "@material-ui/core/Avatar"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h4>Room name</h4>
                <p>this is last message</p>

            </div>
            
        </div>
    )
}

export default SidebarChat
