const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

var schemaInstance, model;

function connect(mongodbUri, collection, schema) {
    mongoose.Promise = global.Promise;
    return mongoose.connect(mongodbUri, (err, res) => {
        if (err) {
            console.log('Error connection to: ' + mongodbUri + '. error: ' + err);
        } else {
            console.log('Succeeded connection to: ' + mongodbUri);
            schemaInstance = new mongoose.Schema({
                user: String,
                content: String,
                time: {
                    type: Date,
                    default: Date.now
                }
            });

            model = mongoose.model(collection, schemaInstance);
        }
    })
}

function insert(data) {
    let node = new model(data);
    node.save((err) => { console.log(err); });
}

function select(condition) {
    let promise = model.find(condition).exec();
    return promise;
}

exports.connect = connect;
exports.insert = insert;
exports.select = select;