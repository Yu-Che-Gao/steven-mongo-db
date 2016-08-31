const express = require('express');
const router = express.Router();

router.post('/list-diary', require('./list-diary'));
router.get('/', (req, res) => {
    res.send('you have no right to access this page.')
});

// router.ws('/echo', require('./ws-echo'));
router.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    });
})

module.exports = router;