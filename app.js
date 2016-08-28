const express = require('express');
require('express-mongoose');
const app = express();
const mongodbLib = require('./mongodbLib.js');
const promiseLib = require('./promiseLib.js');
const mongodbUri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

mongodbLib.connect(mongodbUri);
// mongodbLib.insert('diary-dbs', {user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高', content: '今天天氣真不好' });

// var promise = promiseLib.getNewPromise(['diary-dbs', { user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高' }]);

app.get('/', (req, res) => {
    let promise = mongodbLib.select('diary-dbs', { user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高' })
    promise.then(
        (result) => { res.send(result); }, (error) => { console.log(error); }
    )
})

app.listen(port, () => { console.log('listening on port ' + port) });