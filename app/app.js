const socket = io('ws://localhost:8080')

socket.on('server-outbound', isSignOn => {
    const el = document.createElement('li')
    el.innerHTML = isSignOn ? "Sign is ON" : "Sign is OFF"
    let parent = document.querySelector('ul')
    parent.replaceChild(el, parent.childNodes[0])
})

document.querySelector('button').onclick = () => {
    socket.emit('server-inbound', 'bonks')
}
