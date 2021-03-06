const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(mongodbUri);
app.use(require('./controllers'))
app.listen(port, () => {
    console.log('listening on port ' + port)
});