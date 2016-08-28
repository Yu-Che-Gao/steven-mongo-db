const mongodbLib = require('./mongodbLib.js');
const promiseLib = require('./promiseLib.js');
const mongodbUri = process.env.MONGODB_URI;

mongodbLib.connect(mongodbUri);
// mongodbLib.insert('diary-dbs', {user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高', content: '今天天氣真不好' });

// var promise = promiseLib.getNewPromise(['diary-dbs', { user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高' }]);
var promise = mongodbLib.select('diary-dbs', { user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高' })
promise.then((value) => {
    (result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    }
})