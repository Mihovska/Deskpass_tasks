## HTTP Proxy Server

A simple HTTP proxy server in Node.js and Express.js.\
`morgan` middleware is used to simplify logging and a blacklist feature for incoming requests.

## Setup
```
npm install
```

## Start the server
```
npm start
```
 ## Testing

The tests can be run with following command:
```
npm test
```
Another way to test is with `curl` or `Postman`.

```curl
curl -H "Authorization: test_user" localhost:3000/json_placeholder/posts/1

curl localhost:3000/json_placeholder/posts/1

curl localhost:3000/info
```
