const express = require('express');
const router = express.Router();
const { getAllUsers, approveOwner } = require('../controllers/adminController');

router.get('/users', getAllUsers);
router.patch('/approve-owner/:id', approveOwner);

module.exports = router;
