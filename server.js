const fastify = require('fastify')({ logger: true }) //en vez de fastify podría llamarlo app: lo uso para crear rutas
const PORT = 8080
fastify.register(require('./routes/items'))  //registro las rutas como si registrara un plugin cualquiera


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