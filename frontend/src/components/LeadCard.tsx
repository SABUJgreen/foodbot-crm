export default function LeadCard({ lead }) {
  return (
    <div className="rounded-2xl p-4 bg-white shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold text-purple-700">{lead.name}</h2>
      <p className="text-gray-600">Contact: {lead.contact}</p>
      {lead.location && <p className="text-sm text-gray-500">📍 {lead.location}</p>}
    </div>
  );
}
