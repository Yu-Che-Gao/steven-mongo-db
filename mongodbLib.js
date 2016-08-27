const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

function connect(mongodbUri) {
    mongoose.connect(mongodbUri, (err, res) => {
        if (err) {
            console.log('Error connection to: ' + mongodbUri + '. error: ' + err);
        } else {
            console.log('Succeeded connection to: ' + mongodbUri);
        }
    })
}

function insert(collection, schema, data) {
    let schemaInstance = new mongoose.Schema(schema);
    let model = mongoose.model(collection, schemaInstance);
    let node = new model(data);
    node.save((err) => { console.log(err); });
}

exports.connect = connect;
exports.insert = insert;