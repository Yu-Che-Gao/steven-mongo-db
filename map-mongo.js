const diaryDbs = require('./diary-dbs.js');
const bodyParser=require('body-parser');
function listDiary(req, res) {
    diaryDbs.find({ user: req.body.user }).exec().then((result) => { return res.send(result); });
}

exports.listDiary = listDiary;