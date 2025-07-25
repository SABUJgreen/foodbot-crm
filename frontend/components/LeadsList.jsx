import React, { useEffect, useState } from "react";
import { fetchLeads } from "../api";

const LeadsList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads().then(res => setLeads(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>📋 Leads</h2>
      <ul>
        {leads.map((lead, i) => (
          <li key={i}>{lead.name} - {lead.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsList;
