import React, { useState } from "react";
import { sendCommand } from "../api";

const CommandInput = () => {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendCommand(command);
      setResponse(JSON.stringify(res.data));
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2>💬 Send Command to MCP</h2>
      <form onSubmit={handleSubmit}>
        <input value={command} onChange={e => setCommand(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <pre>{response}</pre>
    </div>
  );
};

export default CommandInput;
