const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const requestIp = require('request-ip');
require('dotenv').config();

// Create Express server
const app = express();

//Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
const API_SERVICE_URL = process.env.API_SERVICE_URL;
const BLACKLIST = process.env.BLACKLIST;

//Logging incoming requests
app.use(morgan('dev'));

function getIp(req) {
    let clientIp = requestIp.getClientIp(req);
    // clientIp = clientIp.split(':').slice(-1);
    return clientIp;
}

//mock info GET endpoint
app.get('/info', (req, res, next) => {
    let clientIp = requestIp.getClientIp(req);
    clientIp = clientIp.split(':').slice(-1)
    console.log('clientIp: ' + clientIp);
    res.send('This is a simple proxy server');
});

//Authorization
app.use('', (req, res, next) => {
    if (req.headers.authorization) {
        console.log(req.headers);
        next();
    } else {
        res.sendStatus(403);
    }
});

app.use('', (req, res, next) => {
    const ipAddress = getIp(req);
    if (BLACKLIST !== ipAddress) {
        next();
    } else {
        res.status(403).send(ipAddress + ' IP address is not in the Whitelist');
    }
});

//Proxy endpoints
app.use('/json_placeholder', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: ''
    }
}));

//Start the proxy
const server = app.listen(PORT, HOST, () => {
    console.log(`Starting proxy at ${HOST}:${PORT}`);
});

module.exports = server;