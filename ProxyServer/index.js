const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const requestIp = require('request-ip');
require('dotenv').config();
const blacklist = require('./data/blacklisted');

// Create Express server
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const API_SERVICE_URL = 'https://jsonplaceholder.typicode.com';
const BLACKLIST = blacklist.blacklistedAddresses;

// Logging incoming requests
app.use(morgan('dev'));

/**
 * It returns the IP address of the client.
 * @param req - The request object
 */
function getIP(req) {
    let clientIp = requestIp.getClientIp(req);
    clientIp = clientIp.split(':').slice(-1).pop();
    return clientIp;
}

// This is a mock endpoint that returns a simple message.
app.get('/info', (req, res, next) => {
    res.send('This is a simple proxy server');
});

// Authorization header check
app.use('', (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.sendStatus(403);
    }
});

// Check if the IP address of the client is in the blacklist.
app.use('', (req, res, next) => {
    const ipAddress = getIP(req);
    if (BLACKLIST.includes(ipAddress)) {
        res.status(403).send(ipAddress + ' IP address is not in the Whitelist');
    } else {
        next();
    }
});

// Creating a proxy middleware that will forward all requests to the API_SERVICE_URL.
app.use('/json_placeholder', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: ''
    }
}));

// Starting the proxy server.
const server = app.listen(PORT, HOST, () => {
    console.log(`Starting proxy at ${HOST}:${PORT}`);
});

module.exports = server;