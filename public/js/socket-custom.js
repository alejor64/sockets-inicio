const socket = io()

socket.on('connect', () => {
    console.log('conectado al servidor desde el front')
})

socket.on('disconnect', () => {
    console.log('Conexión perdida')
})

socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola mundo'
}, (res) => {
    console.log('Respuesta del server:', res)
})

socket.on('enviarMensaje', (msn) => {
    console.log(msn)
})