const items = require('../Items')

// Opciones para get all items -> formatea el schema para la respuesta de la llamada en caso ok
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'integer'},   // si borrara esta línea no devolvería ids; si pusiera 'string' devolvería tipo string
                        name: {type: 'string'}
                    }
                }
            }
        }
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: {type: 'integer'},
                    name: {type: 'string'}
                }
            }
        }
    }
}

//al separar las rutas, puedo registrarlas como un plugin
function itemRoutes (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts, (req, reply) => {
        reply.send(items)
    })
    
    // Get single items
    fastify.get('/items/:id', getItemOpts, (req, reply) => {
        const {id} = req.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })
    done()
}

module.exports = itemRoutes