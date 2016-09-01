const diaryDbs = require('./diary-dbs.js');
function echoSameMessage(ws, req) {
    ws.on('message', (msg) => {
        ws.send(msg);
    })
}

function echoDiary(ws, req) {
    ws.on('message', (msg) => {
        diaryDbs.find({ user: msg }).exec().then((result) => {
            console.log('ws');
            console.log(result);
            return result;
        }).then((result)=>{
            ws.send(result);
            return;
        });
    })
}

exports.echoSameMessage = echoSameMessage;
exports.echoDiary = echoDiary;