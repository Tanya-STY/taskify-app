// Chat.js
import React, { useState } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import homepageimg from "../Image/homepage-image.jpg";
import bellicon from "../Image/bell-icon.png";
import { Link } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hi Omar, how are you?", sender: "Sara" },
    { text: "Hey Sara, I'm good. How about you?", sender: "Omar" },
    { text: "I'm doing well too, thanks for asking!", sender: "Sara" },
    { text: "Have you started the project?", sender: "Sara" },
    { text: "Yes, I'm on it right now!", sender: "Omar" },
    { text: "Perfect, me too!", sender: "Sara" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "Sara" }]);
      setNewMessage("");
    }
  };

  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "-");

  return (
    <div>
      <div className="chat-banner">
        <img src={homepageimg} alt="banner" className="homepage-image" />
        <p className="homepage-date">{formattedDate}</p>
        <Link to={"/"}>
          <img src={bellicon} alt="bell icon" className="bell-icon-homepage" />
        </Link>
      </div>

      <div className="chat-container">
        <div className="chat-header">Mini-Capstone</div>
        <hr className="separator" />
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "Sara" ? "sara-message" : "omar-message"
              }`}
            >
              <div className="message-sender-icon">
                {message.sender === "Sara" ? "S" : "O"}
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <div className="file-icon">
            <FontAwesomeIcon icon={faPaperclip} />
          </div>
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
