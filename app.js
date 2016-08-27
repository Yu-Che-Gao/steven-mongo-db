const mongoose = require('mongoose');
const mongodbLib = require('./mongodbLib.js');
const mongodbUri = process.env.MONGODB_URI;

mongoLib.insert({
    user: String,
    content: String,
    time: { type: Date, default: Date.now }
}, {
        user: '陳',
        content: '今天天氣真好'
});


// var schema = mongodbLib.getSchema({
//     user: String,
//     content: String,
//     time: { type: Date, default: Date.now }
// });

// var diary = mongoose.model('diary-dbs', schema);
// var diaryNode = new diary({
//     user: '高宇哲',
//     content: '今天天氣真好'
// });

// diaryNode.save((err) => { if (err) { console.log(err); } });

mongodbLib.connect(mongodbUri);