import React from 'react';
import './popUpChatWindow.css';

function PopUpChatWindow() {
  return (
    <div className="chat-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Chat</h1>

        <label htmlFor="msg">
          <b>Message</b>
        </label>
        <textarea placeholder="Type message.." name="msg" required></textarea>

        <button type="submit" className="btn">
          Send
        </button>
        <button
          type="button"
          className="btn cancel"
          onClick={() => {
            console.log('');
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
}
export default PopUpChatWindow;
