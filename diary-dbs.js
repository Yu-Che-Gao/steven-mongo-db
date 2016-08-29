const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
const schema = mongoose.Schema;
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