import { useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

export default function Home() {
  const [leads, setLeads] = useState([]);

  const handleNewLead = (lead) => {
    setLeads([...leads, lead]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Home - Lead Management</h2>
      <LeadForm onSubmit={handleNewLead} />
      <LeadList leads={leads} />
    </div>
  );
}
