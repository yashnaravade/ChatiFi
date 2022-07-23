import React from 'react';
import './ReceivedMessage.css';

function ReceivedMessage(props) {
  return (
    <div className="container-received-message">
    <h6 className='received-message-username'>{props.user}</h6>
    <div className='received-message-body'>
    {props.message}
    </div>
  </div>
  )
}

export default ReceivedMessage;