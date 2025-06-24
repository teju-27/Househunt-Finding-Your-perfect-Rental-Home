const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createProperty,
  getOwnerProperties,
  updatePropertyStatus,
  getOwnerBookings
} = require('../controllers/ownerController');

router.post('/properties', auth, createProperty);
router.get('/properties', auth, getOwnerProperties);
router.patch('/properties/:id/status', auth, updatePropertyStatus);
router.get('/bookings', auth, getOwnerBookings);

module.exports = router;