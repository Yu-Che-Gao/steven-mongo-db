const express = require('express');
const app = express();
const mongodbLib = require('./map-mongo.js');
const port = process.env.PORT || 5000;

app.get('/', mongodbLib.listDiary);
app.listen(port, () => { console.log('listening on port ' + port) });