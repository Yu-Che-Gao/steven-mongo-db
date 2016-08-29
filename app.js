const express = require('express');
const app = express();
const diaryDbs = require('./diary-dbs.js');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    diaryDbs.find({ user: '高宇哲' }).exec().then((result) => {
        return res.send(result);
    });
});
app.listen(port, () => { console.log('listening on port ' + port) });