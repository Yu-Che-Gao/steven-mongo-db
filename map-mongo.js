const diaryDbs = require('./diary-dbs.js');

function listDiary(req, res) {
    diaryDbs.find({ user: '高' }).exec().then((result) => { return res.send(result); });
}

exports.listDiary = listDiary;