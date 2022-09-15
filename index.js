'use strict'

const fastifyPlugin = require('fastify-plugin')
const io = require('socket.io')

module.exports = fastifyPlugin(async function (fastify, opts) {
  fastify.decorate('io', io(fastify.server, opts))
  fastify.addHook('onClose', (fastify, done) => {
    fastify.io.close()
    done()
  })
}, { fastify: '>=3.24.x', name: 'fastify-socket-io' })