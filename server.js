const fastify = require('fastify')({ logger: true }) //en vez de fastify podría llamarlo app: lo uso para crear rutas
const PORT = 8080

const items = require('./Items')

//para crear rutas:
fastify.get('/items', (req, reply) => {
    reply.send(items)
})

fastify.get('/items/:id', (req, reply) => {
    const {id} = req.params
    const item = items.find(item => item.id === id)
    reply.send(item)
})

//fastify.listen inicia mi servidor (como app.listen con express) -> devuelve promise
const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()