var express = require('express')
var bodyParser = require('body-parser')
var app = express() // new instance of express
var http = require('http').Server(app) 
var io = require('socket.io')(http) // express and socket.io will be running at the same time using http

app.use(express.static(__dirname)) // serve static files
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Tim', message: 'hi'},
    {name: 'Jane', message: 'hello'},
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
  messages.push(req.body)
  io.emit('message', req.body)
    res.sendStatus(200)
})

// send a socket.io connection message
io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(3000, () => {
    // callback
    console.log('server is listening on port', server.address().port)
})
