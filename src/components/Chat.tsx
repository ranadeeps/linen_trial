import React, { useState } from "react";
import { useWebSocket } from "../hooks/useWebSocket";

const WS_URL = "wss://thetruetouch.in/api/users/ws"; // Replace with your URL

export const Chat: React.FC = () => {
  const { messages, sendMessage, isConnected } = useWebSocket(WS_URL);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Discuss with live visitors</h2>
      <div>
        Status:{" "}
        {isConnected ? (
          <span style={{ color: "green" }}>Connected</span>
        ) : (
          <span style={{ color: "red" }}>Disconnected</span>
        )}
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginTop: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          style={{ flex: 1, padding: "8px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          style={{ padding: "8px 12px", marginLeft: "5px" }}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};
