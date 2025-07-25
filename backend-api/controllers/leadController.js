const db = require('../db/firestore');
const leadsCollection = db.collection('leads');

exports.createLead = async (req, res) => {
  try {
    const newLead = req.body;
    const docRef = await leadsCollection.add(newLead);
    res.status(201).json({ id: docRef.id, ...newLead });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const snapshot = await leadsCollection.get();
    const leads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeadById = async (req, res) => {
  try {
    const doc = await leadsCollection.doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const leadRef = leadsCollection.doc(req.params.id);
    await leadRef.update(req.body);
    const updatedDoc = await leadRef.get();
    res.json({ id: updatedDoc.id, ...updatedDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    await leadsCollection.doc(req.params.id).delete();
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
