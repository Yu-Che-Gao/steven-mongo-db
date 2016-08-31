const wsEchoModel = require('../medels/ws-echo.js');
const express = require('express');
const router = express();

router.ws('/echo', wsEchoModel.echoSameMessage);
module.exports = router;