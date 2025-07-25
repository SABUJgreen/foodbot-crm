const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// Define routes
router.post('/leads', leadController.createLead);
router.get('/leads', leadController.getAllLeads);
router.get('/leads/:id', leadController.getLeadById);
router.put('/leads/:id', leadController.updateLead);
router.delete('/leads/:id', leadController.deleteLead);

// Export the router
module.exports = router;
