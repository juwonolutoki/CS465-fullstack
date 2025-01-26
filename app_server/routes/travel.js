const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

router.get('/travel', travelController.getTrips);

module.exports = router;
