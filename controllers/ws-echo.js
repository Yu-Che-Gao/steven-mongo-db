const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const router = express.Router();
const wsEchoModel = require('../models/ws-echo.js');

router.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    });
});
module.exports = router;