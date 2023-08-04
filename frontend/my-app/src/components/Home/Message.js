import React from 'react';
import './Message.css'

function Message({ mess }) {
  return (
    <div className="message">
      <h2>{mess}</h2>
    </div>
  );
}

export default Message;