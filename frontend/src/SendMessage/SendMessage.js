import React from 'react'
import "./SendMessage.css"

function SendMessage(props) {
  return (
    <div className="container-send-message">
      <h6 className='send-message-username'>You</h6>
      <div className='send-message-body'>
         {props.message}
      </div>
    </div>
  )
}

export default SendMessage;