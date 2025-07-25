export default function LeadList({ leads }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Lead List</h3>
      {leads.length === 0 ? (
        <p>No leads yet.</p>
      ) : (
        <ul className="space-y-2">
          {leads.map((lead, index) => (
            <li key={index} className="p-3 border rounded shadow-sm">
              <strong>{lead.name}</strong> - {lead.email} ({lead.interest})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
