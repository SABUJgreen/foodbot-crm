const leadController = require('./leadController');

exports.handleCommand = async (req, res) => {
  const { command, data } = req.body;

  try {
    switch (command) {
      case 'createLead':
        return await leadController.createLead({ body: data }, res);
      case 'getLeads':
        return await leadController.getLeads(req, res);
      case 'getLeadById':
        req.params.id = data.id;
        return await leadController.getLeadById(req, res);
      case 'updateLead':
        req.params.id = data.id;
        req.body = data;
        return await leadController.updateLead(req, res);
      case 'deleteLead':
        req.params.id = data.id;
        return await leadController.deleteLead(req, res);
      default:
        return res.status(400).json({ error: 'Unknown command' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
