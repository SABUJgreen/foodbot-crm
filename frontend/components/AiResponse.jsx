import React, { useState } from "react";
import { askAI } from "../api";

const AiResponse = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = async (e) => {
    e.preventDefault();
    try {
      const res = await askAI(message);
      setReply(res.data.response);
    } catch (err) {
      setReply("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2>🤖 Ask AI Agent</h2>
      <form onSubmit={handleAsk}>
        <input value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Ask</button>
      </form>
      <p><strong>Reply:</strong> {reply}</p>
    </div>
  );
};

export default AiResponse;
