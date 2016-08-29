const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const diaryDbs = new Schema({
    user: String,
    content: String,
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('diary-dbs', diaryDbs);