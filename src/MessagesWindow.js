import React from 'react';

function MessagesWindow(props) {
  return (
    <ul className="message-list">
      {props.messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === props.senderUser ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  )
}

export default MessagesWindow;