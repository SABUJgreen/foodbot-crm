import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/leads';

export async function handleCommand(command, data) {
  switch (command) {
    case 'createLead':
      return await axios.post(`${API_BASE}`, data).then(res => res.data);

    case 'getLeads':
      return await axios.get(`${API_BASE}`).then(res => res.data);

    case 'getLeadById':
      if (!data.id) throw new Error('Missing lead ID');
      return await axios.get(`${API_BASE}/${data.id}`).then(res => res.data);

    case 'updateLead':
      if (!data.id) throw new Error('Missing lead ID');
      return await axios.put(`${API_BASE}/${data.id}`, data).then(res => res.data);

    case 'deleteLead':
      if (!data.id) throw new Error('Missing lead ID');
      return await axios.delete(`${API_BASE}/${data.id}`).then(res => res.data);

    default:
      throw new Error(`Unknown command: ${command}`);
  }
}
