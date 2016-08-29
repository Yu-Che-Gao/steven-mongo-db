const diaryDbs = require('./diary-dbs.js');

function listDiary(req, res) {
    diaryDbs.find({ user: '高宇哲' }).exec().then((result) => { res.send(result); });
}