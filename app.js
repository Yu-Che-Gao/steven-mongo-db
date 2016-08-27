const mongodbLib = require('./mongodbLib.js');
const mongodbUri = process.env.MONGODB_URI;

mongodbLib.connect(mongodbUri);
mongodbLib.insert('diary-dbs', {user: String, content: String, time: { type: Date, default: Date.now } }, { user: '高', content: '今天天氣真不好' });
