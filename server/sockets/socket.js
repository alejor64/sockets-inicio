const {io} = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado')

    client.emit('enviarMensaje', {
        usuario: "Admin",
        mensaje: "Bienvenido"
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)

        // if(msn.usuario){
        //     callback({
        //         res: 'Todo salió bien'
        //     })
        // } else {
        //     callback({
        //         res: 'Todo mal'
        //     })
        // }
    })
})