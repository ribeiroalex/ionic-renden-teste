
var express = require('express');
var path = require('path');
var fs = require('fs');
const rendertron = require('rendertron-middleware');
 
var app = express();

const bots = [
  'baiduspider',
  'bingbot',
  'embedly',
  'facebookexternalhit',
  'linkedinbot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'slackbot',
  'twitterbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
];

app.use(rendertron.makeMiddleware({
	proxyUrl: "https://fair-terminus-245617.appspot.com/render",
	userAgentPattern: new RegExp(bots.join('|'), 'i')
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('*', express.static(path.join(__dirname, 'dist')));

module.exports = app;
