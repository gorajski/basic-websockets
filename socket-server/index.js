const http = require('http').createServer()
const io = require('socket.io')(http, { cors: { origin: '*' } })

isSignOn = false

io.on('connection', (socket) => {
    socket.on('server-inbound', () => {
        isSignOn = !isSignOn
        console.log(isSignOn)
        io.emit('server-outbound', isSignOn)
    })
})

http.listen(8080, () => console.log('listening on http://localhost:8080'))
