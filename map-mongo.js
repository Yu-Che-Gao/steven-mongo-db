const diaryDbs = require('./diary-dbs.js');
function listDiary(req, res) {
    diaryDbs.find({ user: req.body.user }).exec().then((result) => { return res.send(result); });
}

exports.listDiary = listDiary;