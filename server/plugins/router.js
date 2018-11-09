const routes = [].concat(
  require('../routes/home'),
  require('../routes/login'),
  require('../routes/logout'),
  require('../routes/secure'),
  require('../routes/about'),
  require('../routes/public')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
