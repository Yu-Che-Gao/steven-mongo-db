const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

var schemaInstance;

function connect(mongodbUri, schema) {
    mongoose.Promise = global.Promise;
    schemaInstance = new mongoose.Schema({
        user: String,
        content: String,
        time: {
            type: Date,
            default: Date.now
        }
    });
    return mongoose.connect(mongodbUri, (err, res) => {
        if (err) {
            console.log('Error connection to: ' + mongodbUri + '. error: ' + err);
        } else {
            console.log('Succeeded connection to: ' + mongodbUri);
        }
    })
}

function insert(collection, data) {
    let model = mongoose.model(collection, schemaInstance);
    let node = new model(data);
    node.save((err) => { console.log(err); });
}

function select(collection, condition) {
    let model = mongoose.model(collection, schemaInstance);
    let promise = model.find(condition).exec();
    return promise;
}

exports.connect = connect;
exports.insert = insert;
exports.select = select;
exports.close = close;