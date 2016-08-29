const express = require('express');
const app = express();
const mongoose=require('mongoose');
const mapMongo = require('./map-mongo.js');
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri);
app.get('/', mapMongo.listDiary);
app.listen(port, () => { console.log('listening on port ' + port) });