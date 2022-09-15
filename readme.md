# fastify-plugin-socket.io
[![NPM](https://nodei.co/npm/fastify-plugin-socket.io.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-plugin-socket.io/)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

`fastify-plugin-socket.io` enables the use of [Socket.io](https://socket.io/) in a Fastify application.

## Install
```
yarn add fastify-plugin-socket.io
```

## Usage
Require `fastify-plugin-socket.io` and register it as any other plugin, it will add a `io` decorator.
```js
const fastify = require('fastify')()

fastify.register(require('fastify-plugin-socket.io'), {
  // put your socket.io options here
})

fastify.get('/', (req, reply) => {
  fastify.io.emit('hello world')
})

fastify.listen(3000)
```
You can use it as is without passing any option, or you can configure it as explained by Socket.io [doc](https://socket.io/docs/server-api/).

### Hook

The plugin also adds an `onClose` hook which closes the socket server when the `fastify` instance is closed.

## Acknowledgements

The code is a port for Fastify of [`socket.io`](https://github.com/socketio/socket.io).

## License

Licensed under [MIT](./LICENSE).<br/>
[`socket.io` license](https://github.com/socketio/socket.io/blob/master/LICENSE)