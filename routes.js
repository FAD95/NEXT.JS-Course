const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add('about')
  .add('index')
  .add('channel', '/:slug.:id', 'channel')
  .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')
