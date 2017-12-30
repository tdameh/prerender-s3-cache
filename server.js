#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeLocation: '/app/.apt/usr/bin/google-chrome',
    resourceDownloadTimeout: 60000,
    jsTimeout: 60000
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.s3HtmlCache());

server.start();

