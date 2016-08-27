const mongoose = require('mongoose');
const mongodbLib = require('./mongodbLib.js');
const mongodbUri = process.env.MONGODB_URI;

var schema = new mongoose.Schema({
    user: String,
    content: String,
    time: { type: Date, default: Date.now }
});

var diary = mongoose.model('diary-db', schema);
var diaryNode = new diary({
    user: '高宇哲',
    content: '今天天氣真好'
});

diaryNode.save((err) => { if (err) { console.log(err); } });

mongodbLib.connect(mongodbUri);