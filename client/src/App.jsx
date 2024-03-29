import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import ReceivedMessage from "./ReceivedMessage/ReceivedMessage";
import SentMessage from "./SendMessage/SendMessage";

function App() {
  const [data, setData] = useState([]);

  const [currentUser, setCurrentUser] = useState("");

  const [currentMessage, setCurrentMessage] = useState("");

  const [fetchTrigger, setFetchTrigger] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // const response = await axios.get("/message");
      const response = await axios.get("https://chati-fi.vercel.app/message");
      setData(response.data);
    }
    fetchData();
  }, [fetchTrigger]);

  function sendMessage() {
    // axios.post("/message", {
      axios.post("https://chati-fi.vercel.app/message", {
      user: currentUser,
      messageType: "text",
      messageBody: currentMessage,
    });

    setCurrentMessage("");

    setFetchTrigger(!fetchTrigger);
  }

  return (
    <>
      <div className="container">
        <div className="chat-container">
          <h2 className="text-center">ChatiFi</h2>
          <div className="chat-container">
            {data.map((obj, i) => {
              if (obj.user === currentUser) {
                return <SentMessage key={i} message={obj.messageBody} />;
              } else {
                return (
                  <ReceivedMessage
                    key={i}
                    user={obj.user}
                    message={obj.messageBody}
                  />
                );
              }
            })}
          </div>

          <div className="myclass">
            <center>
              <b>
                <br />
                <p className="current-user">Current User</p>
              </b>{" "}
              {currentUser}
            </center>

            <center>
              <input
                className="text-center"
                type="text"
                placeholder="Enter Username"
                onChange={(e) => {
                  setCurrentUser(e.target.value);
                }}
              />
              <br />
              <br />{" "}
            </center>

            <center>
              <input
                className="text-center"
                type="text"
                placeholder="Enter message"
                value={currentMessage}
                onChange={(e) => {
                  setCurrentMessage(e.target.value);
                }}
              />
              <br />
              <br />
            </center>

            <center>
              <button onClick={sendMessage}>Send</button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
