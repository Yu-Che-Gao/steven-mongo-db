const express = require('express');
const router = express.Router();
const wsEchoModel = require('../models/ws-echo.js');

router.ws('/echo', (ws, req) => {
    ws.on('message', (msg => {
        wsEchoModel.echoSameMessage(msg);
    }));
});
module.exports = router;