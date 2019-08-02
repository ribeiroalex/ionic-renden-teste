var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
const fetch = require('node-fetch');
const url = require('url');
const rendertron = require('rendertron-middleware');
var app = express();

app.use(rendertron.makeMiddleware({
    proxyUrl: 'https://fair-terminus-245617.appspot.com/render',
}));

app.use(express.static('www'));
app.use('*', express.static(path.join(__dirname, 'dist')));

module.exports = app;