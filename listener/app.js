const socket = io('ws://localhost:8080')
// const axios = require('axios/dist/browser/axios.cjs');

socket.on('server-outbound', isSignOn => {
    console.log(isSignOn ? "Sign is ON" : "Sign is OFF")

    axios({
        method: 'post',
        url: 'http://localhost:7777/toggle',
        data: { state: isSignOn }
    })
        .then(() => {
            console.log('success')
        })
        .catch(() => {
            console.log('failure')
        })
})
