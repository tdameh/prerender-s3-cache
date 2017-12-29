#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    resourceDownloadTimeout: 60000,
    jsTimeout: 60000
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
