import React from 'react'
import Add from "../images/add.jpg";
import Video from "../images/vc.png";
import More from "../images/more.png";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
                <img src={Video} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
            
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
