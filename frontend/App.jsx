import React from "react";
import LeadsList from "./components/LeadsList";
import CommandInput from "./components/CommandInput";
import AiResponse from "./components/AiResponse";

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 FoodBot CRM Dashboard</h1>
      <LeadsList />
      <hr />
      <CommandInput />
      <hr />
      <AiResponse />
    </div>
  );
};

export default App;
