import React, { useEffect, useState } from 'react';
import messagesData from '../../data/data';
import './chatMessages.css';

function ChatMessages() {
  const [chatMessagesList, setChatMessagesList] = useState(messagesData);

  function addNewMessageToChatList(messageText) {
    if (messageText.length === 0) return;
    let newMessage = {
      id: chatMessagesList.length + 1,
      text: messageText,
      imgUrl: '',
      sender: true,
    };
    setChatMessagesList([...chatMessagesList, newMessage]);
  }

  useEffect(() => {
    setInterval(function () {
      addNewMessageToChatList('just Added me');
    }, 8000);
  });

  return (
    <div>
      {chatMessagesList.map((message, i) => {
        if (message.sender) {
          return (
            <div key={i} className={`container delay`}>
              <img alt="Avatar" />
              <p>{message.text}</p>
              <span className="time-right">11:00</span>
            </div>
          );
        } else {
          return (
            <div key={i} className="container darker">
              <img
                src="/w3images/avatar_g2.jpg"
                alt="Avatar"
                className="right"
              />
              <p>{message.text}</p>
              <span className="time-left">11:01</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ChatMessages;
