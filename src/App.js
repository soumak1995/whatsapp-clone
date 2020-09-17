import React,{useEffect, useState} from 'react';

import './App.css';
import Chat from './component/Chat';
import Sidebar from './component/Sidebar';
import Pusher from 'pusher-js'
import axios from './component/axios'
function App() {
  const [messages,setMessages] = useState([]);
 useEffect(()=>{
     axios.get('/messages/sync')
     .then(response=>{
       setMessages(response.data)
     });
 },[])
  useEffect(()=>{
    var pusher = new Pusher('69befe5b88dcdc17bb7e', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage) =>{
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="App">
      <div className="App__body">
            <Sidebar/>
          <Chat messages={messages}/> 
      </div>
     
    
    </div>
  );
}

export default App;
