import React, { useState } from 'react'
import '../css/Chat.css'
import Avatar from "@material-ui/core/Avatar"
import IconButton from '@material-ui/core//IconButton';
import SidebarChat from './SidebarChat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axiox from './axios'
function Chat({messages}) {
    const [input,setInput]=useState("");
    const sendMessage=async(e)=>{
     e.preventDefault();
     await axiox.post('message/new',{
           message:input,
           name:"DEMO APP",
           timestamp:"far far away from future",
            received:true
     });
     setInput("");
    }
    return (
        <div className="chat">
        
            <div className="chat__header">
              <Avatar/>
              <div className="chat__headerInfo">
              <h3>Room name</h3>
              <p>Last seen at...</p>
              </div>
              <div className="chat__headerRight">
              <IconButton>
               <SearchOutlined/>
              </IconButton>
              <IconButton>
              <AttachFileIcon/>
              </IconButton>
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
              </div>
            </div>
            <div className="chat__body">
            {
            messages.map((message,index)=>(
                <p key={index} className={`chat__message ${message.received
                    && "chat_reciver"}`}>
                         <span className="chat__name">{message.name}</span>
                         {message.message}
                         <span className="chat__timestamp">
                             {new Date().toUTCString()}
                         </span>
                         </p>
            )
                
            )
        }
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input placeholder="Type a message"
                    type="text"
                    value={input}
                    onChange={e=>setInput(e.target.value)}/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
            
        </div>
    )
}

export default Chat
