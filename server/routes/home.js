module.exports = {
  method: 'GET',
  path: '/',
  options: {
    auth: {
      strategy: 'session',
      mode: 'optional'
    },
    handler: (request, h) => {
      return h.view('home', {
        credentials: request.auth.credentials
      })
    }
  }
}
