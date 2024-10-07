const express = require('express');
const router = express.Router();


//import controller
const {postRecord} = require('../controllers/record');

//routes
router.post('/postRecord', postRecord);

module.exports = router;