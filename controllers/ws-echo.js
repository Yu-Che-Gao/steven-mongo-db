const express = require('express');
const router = express.Router();
const wsEchoModel = require('../models/ws-echo.js');

router.ws('/echo', wsEchoModel.echoSameMessage);
module.exports = router;