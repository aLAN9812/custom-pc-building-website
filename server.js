const http = require('http');
const express = require('express');
const route = require('./route');
const app = express();

app.use(express.static(__dirname + '/CSS'))
app.use(express.static(__dirname + '/Images'))
app.use(express.static(__dirname + '/JS'))
app.use('/', route);
app.use((req, res)=>{
   res.status(404).send('<h1>Page not found</h1>');
});

const server = http.createServer(app);
server.listen(3000);
console.log('Server is running...')
console.log('http://localhost:3000/')