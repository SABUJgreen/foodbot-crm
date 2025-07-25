import LeadCard from "../components/LeadCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/leads")
      .then((res) => setLeads(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
