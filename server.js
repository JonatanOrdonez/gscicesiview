var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.use('/', express.static('public'));