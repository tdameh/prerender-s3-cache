#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars' ],
    resourceDownloadTimeout: 60000,
    jsTimeout: 60000
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
