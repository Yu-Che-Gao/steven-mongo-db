const express = require('express');
const router = express.Router();

router.post('/list-diary', require('./list-diary'));
router.get('/', (req, res) => {
    res.send('you have no right to access this page.')
});

require('./ws-echo')

module.exports = router;