import { useState } from "react";
import axios from "axios";

export default function CreateLead() {
  const [form, setForm] = useState({ name: "", contact: "", location: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/leads", form);
    setForm({ name: "", contact: "", location: "" });
    alert("✅ Lead created!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Create New Lead</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Contact"
          className="w-full p-2 border rounded"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Submit Lead
        </button>
      </form>
    </div>
  );
}
