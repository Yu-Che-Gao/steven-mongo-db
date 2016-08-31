function echoSameMessage(ws, req) {
    ws.on('message', (msg) => {
        ws.send(msg)
    });
}

exports.echoSameMessage = echoSameMessage;