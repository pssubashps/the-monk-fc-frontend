//var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use("/", express.static(__dirname));
//app.use("/", express.static(__dirname+"/"+"bower_components"));
app.listen(process.env.PORT || 5000);