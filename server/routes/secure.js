module.exports = {
  method: 'GET',
  path: '/secure',
  options: {
    auth: {
      strategy: 'session'
    },
    handler: (request, h) => {
      let roles = []
      let isAdmin = false
      try {
        roles = JSON.parse(request.auth.credentials.profile.raw.roles)
      } catch (e) {
      }
      roles.forEach(role => {
        isAdmin = role === 'FWISAdmin'
      })
      return h.view('secure', {
        credentials: request.auth.credentials,
        roles: roles,
        isAdmin: isAdmin
      })
    }
  }
}
