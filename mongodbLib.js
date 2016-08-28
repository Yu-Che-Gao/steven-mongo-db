const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

function connect(mongodbUri) {
    mongoose.Promise = global.Promise;
    return mongoose.connect(mongodbUri, (err, res) => {
        if (err) {
            console.log('Error connection to: ' + mongodbUri + '. error: ' + err);
        } else {
            console.log('Succeeded connection to: ' + mongodbUri);
        }
    })
}

function close(connection) {
    connection.disconnect();
}

function insert(collection, schema, data) {
    let schemaInstance = new mongoose.Schema(schema);
    let model = mongoose.model(collection, schemaInstance);
    let node = new model(data);
    node.save((err) => { console.log(err); });
}

function select(collection, schema, condition) {
    let schemaInstance = new mongoose.Schema(schema);
    let model = mongoose.model(collection, schemaInstance);
    let promise = model.find(condition).exec();
    return promise;
}

exports.connect = connect;
exports.insert = insert;
exports.select = select;
exports.close = close;