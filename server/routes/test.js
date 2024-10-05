const express = require('express');
const router = express.Router();


//import controller
const {getTests} = require('../controllers/test');
const {postTest} = require('../controllers/test');


//import middleware

//routes
router.get('/getTests', getTests);
router.post('/postTest', postTest);

module.exports = router;