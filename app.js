const express = require('express');
const app = express();
const mapMongo = require('./map-mongo.js');
const port = process.env.PORT || 5000;

app.get('/', mapMongo.listDiary);
app.listen(port, () => { console.log('listening on port ' + port) });