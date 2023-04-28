const { getItems, getItem } = require('../controllers/items')

// Item schema
const Item =  {
    type: 'object',
    properties: {
        id: {type: 'integer'},   // si borrara esta línea no devolvería ids; si pusiera 'string' devolvería tipo string
        name: {type: 'string'}
    }
}

// Opciones para get -> formatea el schema para la respuesta de la llamada en caso ok
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

//al separar las rutas, puedo registrarlas como un plugin
function itemRoutes (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
    
    // Get single items
    fastify.get('/items/:id', getItemOpts)
    done()
}

module.exports = itemRoutes