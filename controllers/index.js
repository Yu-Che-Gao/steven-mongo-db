const express = require('express');
const router = express.Router();
const wsEchoModel = require('../models/ws-echo.js');

router.post('/list-diary', require('./list-diary'));
router.get('/', (req, res) => {
    res.send('you have no right to access this page.')
});

router.ws('/echo', wsEchoModel.echoSameMessage);
module.exports = router;