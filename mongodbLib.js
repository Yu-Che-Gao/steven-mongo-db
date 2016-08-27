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

exports.connect=connect;