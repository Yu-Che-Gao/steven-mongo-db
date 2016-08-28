const mongodbLib = require('./mongodbLib.js');
const promiseLib = require('./promiseLib.js');
const mongodbUri = process.env.MONGODB_URI;

mongodbLib.connect(mongodbUri);
// mongodbLib.insert('diary-dbs', {user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高', content: '今天天氣真不好' });

var promise = promiseLib.getNewPromise(['diary-dbs', { user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高' }]);
promise.then((value) => {
    mongodbLib.select(value[0], value[1], value[2])
}).then((value) => {
    cosnole.log(value);
})